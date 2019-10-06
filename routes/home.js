const express = require('express')
const router = express.Router()

const db = require('../models')
const Todo = db.Todo
const User = db.User

const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  res.send('Show all todo')
})

module.exports = router