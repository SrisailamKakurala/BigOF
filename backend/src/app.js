const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser') 

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true    
}))
app.use(express.json()) // parsing the data to json
app.use(express.urlencoded({ extended: true })) // for accepting the data through the url 
app.use(express.static('public')) // for storing the static content
app.use(cookieParser()) // for performing crud operations on user cookies in browser

module.exports = { app }