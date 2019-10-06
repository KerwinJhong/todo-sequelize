const express = require('express')
const router = express.Router()
const passport = require('passport')

const db = require('../models')
const User = db.User

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
  })(req, res, next)
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  const { name, email, passport, passport2 } = req.body
  User.findOne({ where: { email: email } }).then(user => {
    if (user) {
      console.log('User alreaady exists')
      res.render('register', (req, res) => {
        name,
        email,
        passport,
        passport2
      })
    } else {
      const newUser = new User({
        name,
        email,
        passport,
      })
      newUser.save().then(user => {
        res.redirect('/')
      }).catch(err => {
        console.log(err)
      })
    }
  })
})

router.get('logout', (req, res) => {
  res.send('logout')
})

module.exports = router