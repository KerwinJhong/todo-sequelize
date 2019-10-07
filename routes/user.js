const express = require('express')
const router = express.Router()
const passport = require('passport')
const bcrypt = require('bcryptjs')

const db = require('../models')
const User = db.User

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res, next) => {
  req.flash('warning_msg', "請確認帳號或密碼")
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next)
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body
  let errors = []

  if (!email || !password || !password2) {
    errors.push({ message: '所有欄位都是必填' })
  }

  if (password != password2) {
    errors.push({ message: '密碼輸入錯誤' })
  }

  if (errors.length > 0) {
    res.render('register', ({ errors, name, email, password, password2 }))
  } else {
    User.findOne({ where: { email: email } }).then(user => {
      if (user) {
        console.log('User alreaady exists')
        res.render('register', (req, res) => {
          name,
          email,
          password,
          password2
        })
      } else {
        const newUser = new User({
          name,
          email,
          password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash

            newUser.save()
              .then(user => res.redirect('/'))
              .catch(err => console.log(err))
          })
        })
      }
    })
  }
})

router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', 'Success logout!')
  res.redirect('/users/login')
})

module.exports = router