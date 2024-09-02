const mongoose = require('mongoose');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const farmerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        index: true
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
        index: true
    },
    cropsGrown: {
        type: [String], // Array of crops
    },
    aadharNumber: {
        type: String,
        unique: true
    },
    profilePicture: {
        type: String,
        default: ''
    },
    refreshToken: {
        type: String,
    },
    unreadMessagesCount: {
        type: Number,
        default: 0
    },
    lastSeen: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true })

farmerSchema.pre("save", async function (next) {
    if(!this.isModified("password")) next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

farmerSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

farmerSchema.plugin(mongooseAggregatePaginate)

module.exports = mongoose.model("Farmer", farmerSchema)