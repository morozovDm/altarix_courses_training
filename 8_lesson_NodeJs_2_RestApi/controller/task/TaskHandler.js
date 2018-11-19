const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
var Task = require('../../model/task')
const config = require('../../config/config')
var getAll = async (req, res) => {
  try {
    var decoded = jwt.verify(req.headers['x-access-token'], config.jwtSecret);

  } catch (e) {
    return res.status(401).send('unauthorized');
  }
    console.log(decoded)
  Task.find({ ownerId: decoded.id }, function (err, task) {
    if (err) return res.status(500).send("There was a problem finding the tasks.");
    res.status(200).send(task);
  });
}

var getById = async (req, res) => {
  Task.findById(req.params.id, function (err, task) {
    if (err) return res.status(500).send("There was a problem finding the task.");
    if (!task) return res.status(404).send("No task found.");
    res.status(200).send(task);
  });
};

var deleteById = async (req, res) => {
  Task.findByIdAndRemove(req.params.id, function (err, task) {
    if (err) return res.status(500).send("There was a problem deleting the task.");
    res.status(200).send("Task: " + task.name + " was deleted.");
  });
};

var updateById = async (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, task) {
    if (err) return res.status(500).send("There was a problem updating the task.");
    res.status(200).send(task);
  });
};

module.exports = {
  getAll,
  getById,
  deleteById,
  updateById
}