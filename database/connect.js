const mongoose = require('mongoose')
const config = require(`${__dirname}/../config/config`)

mongoose.connect(config.db.mongodb_url)

mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', ()=>{console.log("Connected")})