const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://ahuey:BingoBongo1977%21@reporting-cluster.g1qrz6i.mongodb.net/jokerdb';
import logger from './Logger.js'

module.exports.connect = async function () {
    const conn = await mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource:"admin",
        ssl: true,
    }).then( () => logger.info('connected to mongo atlas!')).catch( e => logger.error(e));

    return conn;
};
