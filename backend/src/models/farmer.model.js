const mongoose = require('mongoose');
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const farmerSchema = new mongoose.Schema({
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
}, { timestamps: true });

farmerSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }
});

farmerSchema.methods.isPasswordCorrect = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error('Password comparison failed');
    }
};

farmerSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id,
            aadharNumber: this.aadharNumber,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

farmerSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};

farmerSchema.plugin(mongooseAggregatePaginate);

const farmerModel = mongoose.model("Farmer", farmerSchema);
module.exports = farmerModel;
