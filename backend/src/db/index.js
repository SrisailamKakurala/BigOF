const mongoose = require('mongoose')
const { DB_NAME } = require('../constants')

const connectDB = async () => {
    try {
        const dbConnectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log('Mongodb connnected!! DB Host: ' + dbConnectionInstance.connection.host)
    } catch (err) {
        console.log(err)
        process.exit()
    }
}

module.exports = { connectDB }