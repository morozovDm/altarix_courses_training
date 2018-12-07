import express from 'express'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser'
import Task from '../../model/task'
import config from '../../config/config'
var getAll = async (req:any, res:any) => {
  try {
    var decoded:any = jwt.verify(req.headers['x-access-token'], config.jwtSecret);

  } catch (e) {
    return res.status(401).send('unauthorized');
  }
    console.log(decoded)
  Task.find({ ownerId: decoded.id }, function (err, task) {
    if (err) return res.status(500).send("There was a problem finding the tasks.");
    res.status(200).send(task);
  });
}

var getById = (req:any, res:any) => {
  Task.findById(req.params.id, function (err, task) {
    if (err) return res.status(500).send("There was a problem finding the task.");
    if (!task) return res.status(404).send("No task found.");
    res.status(200).send(task);
  });
};

var deleteById = (req:any, res:any) => {
  Task.findByIdAndRemove(req.params.id, function (err, task:any) {
    if (err) return res.status(500).send("There was a problem deleting the task.");
    res.status(200).send("Task: " + task.name + " was deleted.");
  });
};

var updateById = (req:any, res:any) => {
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, task) {
    if (err) return res.status(500).send("There was a problem updating the task.");
    res.status(200).send(task);
  });
};

export default {
  getAll,
  getById,
  deleteById,
  updateById
}