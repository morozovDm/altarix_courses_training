import express from 'express'
import jwt from 'jsonwebtoken'
import Task from '../../model/task'
import config from '../../config/config'

const getAll = (req: any, res: express.Response) => {
  let decoded: any;
  try {
    decoded = jwt.verify(req.headers['x-access-token'], config.jwtSecret);
  } catch (e) {
    return res.status(401).send('unauthorized');
  }
  Task.find({ ownerId: decoded.id })
    .exec()
    .then((task: any) => {
      res.status(200).send(task);
    })
    .catch(err => {
      if (err) {
        return res.status(500).send("There was a problem finding the tasks.");
      }
    })
}

const getById = (req: express.Request, res: express.Response) => {
  Task.findById(req.params.id)
    .exec()
    .then((task) => {
      if (!task) {
        return res.status(404).send("No task found.");
      }
      res.status(200).send(task);
    })
    .catch(err => {
      if (err) {
        return res.status(500).send("There was a problem finding the task.");
      }
    })
};

const deleteById = (req: express.Request, res: express.Response) => {
  Task.findByIdAndRemove(req.params.id)
    .exec()
    .then((task: any) => {
      res.status(200).send("Task: " + task.name + " was deleted.");
    })
    .catch(err => {
      if (err) {
        return res.status(500).send("There was a problem deleting the task.");
      }
    })
};

const updateById = (req: express.Request, res: express.Response) => {
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then((task) => {
      res.status(200).send(task);
    })
    .catch(err => {
      if (err) {
        return res.status(500).send("There was a problem updating the task.");
      }
    })
};

export default {
  getAll,
  getById,
  deleteById,
  updateById
}