const mongoose = require('mongoose')
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const buyerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        index: true,
        lowercase: true
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true
    },
    email: {
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
}, { timestamps: true });

buyerSchema.pre("save", async function (next) {
    if(!this.isModified("password")) next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

buyerSchema.methods.isPasswordCorrect = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error('Password comparison failed');
    }
}

buyerSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

buyerSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

buyerSchema.plugin(mongooseAggregatePaginate)

const buyerModel = mongoose.model("Buyer", buyerSchema)
module.exports = buyerModel