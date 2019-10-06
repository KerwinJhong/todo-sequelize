const express = require('express')
const router = express.Router()

const db = require('../models')
const Todo = db.Todo
const User = db.User

const { authenticated } = require('../config/auth')

router.get('/new', authenticated, (req, res) => {
  res.send('新增 Todo 頁面')
})

router.post('/', authenticated, (req, res) => {
  res.send('新增一筆  Todo')
})

router.get('/:id', authenticated, (req, res) => {
  res.send('顯示一筆 Todo')
})

router.get('/:id/edit', authenticated, (req, res) => {
  res.send('修改 Todo 頁面')
})

router.put('/:id', authenticated, (req, res) => {
  res.send('修改 Todo')
})

router.get('/:id/delete', authenticated, (req, res) => {
  res.send('刪除 Todo')
})

module.exports = router