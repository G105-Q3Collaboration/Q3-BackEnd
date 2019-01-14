const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000

if(process.env.NODE_ENV !== 'production') require('dotenv').load()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/accounts', require('./routes/accounts'))
app.use('/auth', require('./routes/auth'))
app.get('/posts', require('./routes/posts').getAllPosts)

app.use((req, res, next) => {
    next({status:404, message: "Unable to locate"})
})

app.use((err, req, res, next) => {
    console.error(err)
    const status =  err.status || 500
    res.status(status).send(err)
})

const listener = () => console.log(`Listening on ${port}`)
app.listen(port, listener)