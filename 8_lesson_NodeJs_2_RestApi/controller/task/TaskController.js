const express = require('express')
const bodyParser = require('body-parser')
var router = express.Router()
var TaskHandler = require('./TaskHandler')

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', TaskHandler.getAll)
router.get('/:id', TaskHandler.getById)
router.delete('/:id', TaskHandler.deleteById)
router.put('/:id', TaskHandler.updateById)

module.exports = router