const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/nodeFrame')

mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', ()=>{console.log("Connected")})