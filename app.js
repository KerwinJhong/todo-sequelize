const express = require('express')
const app = express()
const port = 3000
const db = require('./models')
const Todo = db.Todo
const User = db.User
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')

if (process.env.NODE_ENV !== 'production') { // 如果不是 production 模式
  require('dotenv').config() // 使用 dotenv 讀取 .env 檔案
}

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(session({
  secret: 'your secret key',
  resave: 'false',
  saveUninitialized: 'false',
}))

app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)
app.use(flash())

app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

app.use(express.static('public'))
app.use('/', require('./routes/home'))
app.use('/users', require('./routes/user'))
app.use('/todos', require('./routes/todo'))
app.use('/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`App is running on port ${port}!`)
})