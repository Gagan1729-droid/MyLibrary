if(process.env.NODE_ENV !== 'Production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')

app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.error())
db.once('open', () => console.log("Connection to mongo successful"))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)