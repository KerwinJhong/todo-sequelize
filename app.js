const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')
if (process.env.NODE_ENV !== 'production') { // 如果不是 production 模式
    require('dotenv').config() // 使用 dotenv 讀取 .env 檔案
}

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    return res.send('homepage')
})

app.get('/new', (req, res) => {
    return res.send('newpage')
})

app.get('/edit', (req, res) => {
    return res.send('editpage')
})

app.get('/delete', (req, res) => {
    return res.send('deletepage')
})

app.listen(3000, () => {
    console.log('app is running')
})