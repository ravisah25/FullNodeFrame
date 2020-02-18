const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const registerDetails = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    useremail: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    hash: {
        type: String,
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
    }
},
{
    timestamps:true
}
)

autoIncrement.initialize(mongoose.connection);

registerDetails.plugin(autoIncrement.plugin, {
    "model": "registerdetails",
    "field": "_id",
    startAt: 1
})
registerDetails.plugin(autoIncrement.plugin, 'registerdetails');
registerDetails.plugin(uniqueValidator, { message: 'to be unique.' })

registerDetails.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.hash;
    return obj;
}

const registerSchema = mongoose.model('registerdetails', registerDetails)
module.exports = registerSchema;
