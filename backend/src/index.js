require('dotenv').config()
const { app } = require('./app')
const { connectDB } = require('./db')


connectDB()
.then(() => {
    app.on('error', (err) => {
        console.log(err)
        throw err
    })
    app.listen(process.env.PORT || 3000, () => {
        console.log('server is running on port ' + process.env.PORT)
    })
})
.catch((err) => {
    console.log('Mongodb connection failed: ' + err.message)
})
