import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import { TaskModel, ITask } from '@model/task';
import config from '@config/config';

const getAll = (req: Request, res: Response) => {
  let decoded: any;
  const token = <string>req.headers['x-access-token'];
  try {
    decoded = jwt.verify(token, config.jwtSecret);
  } catch (e) {
    return res.status(401).send('unauthorized');
  }
  TaskModel.find({ ownerId: decoded.id })
    .exec()
    .then((task: ITask | ITask[] | null) => {
      res.status(200).send(task);
    })
    .catch((err: Error) => {
      if (err) {
        return res.status(500).send("There was a problem finding the tasks.");
      }
    })
}

const getById = (req: Request, res: Response) => {
  TaskModel.findById(req.params.id)
    .exec()
    .then((task: ITask | null) => {
      if (!task) {
        return res.status(404).send("No task found.");
      }
      res.status(200).send(task);
    })
    .catch((err: Error) => {
      if (err) {
        return res.status(500).send("There was a problem finding the task.");
      }
    })
};

const deleteById = (req: Request, res: Response) => {
  TaskModel.findByIdAndRemove(req.params.id)
    .exec()
    .then((task: ITask | null) => {
      if (task)
        res.status(200).send(`Task: ${task.name} was deleted.`);
    })
    .catch((err: Error) => {
      if (err) {
        return res.status(500).send("There was a problem deleting the task.");
      }
    })
};

const updateById = (req: Request, res: Response) => {
  TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then((task: ITask | null) => {
      res.status(200).send(task);
    })
    .catch((err: Error) => {
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