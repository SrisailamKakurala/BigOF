const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser') 
const session = require('express-session')

const app = express()

app.use(cors({
    // origin: process.env.CORS_ORIGIN,
    credentials: true    
}))
app.use(express.json()) // parsing the data to json
app.use(express.urlencoded({ extended: true })) // for accepting the data through the url 
app.use(express.static('public')) // for storing the static content
app.use(cookieParser()) // for performing crud operations on user cookies in browser
app.use(session({
    secret: process.env.SESSION_SECRET || 'mySecet', 
    resave: false,
    saveUninitialized: true,
}));


// routes import
const farmerRouter = require('./routes/farmer.routes.js')
const buyerRouter = require('./routes/buyer.routes.js')


//routes declaration
app.use('/api/v1/farmers', farmerRouter)
app.use('/api/v1/buyers', buyerRouter)



module.exports = {app}