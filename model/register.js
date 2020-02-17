const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const Schema = mongoose.Schema;

const registerDetails = new Schema({
    firstname : {
        type : String,
    },
    lastname : {
        type : String,
    },
    useremail : {
        type : String,
        unique: true,
        lowercase: true,
        required: true
    },
    hash : {
        type : String,
    },
    dob : {
        type : Number,
    },
    gender : {
        type : String,
    }
})

registerSchema.plugin(uniqueValidator,{ message: 'to be unique.' })
const registerSchema = mongoose.model('registerdetails', registerDetails)
module.exports = registerSchema;
