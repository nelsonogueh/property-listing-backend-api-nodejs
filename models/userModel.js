const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    fullName: {type: String, required: true},
    phone: {type: Number, required: false},
    city: {type: String, required: true},
    userStatus: {type: String, required: true},
    profileImg: {type: String, required: true},
    userRole: {type: String, required: true, default: 'user'},
    registeredDate: {type: String, required: true},

}, {versionKey: false});


const User = userSchema.model('users', userSchema)

