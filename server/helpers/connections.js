const mongoose = require('mongoose');
const logger = require('../../client/src/components/global/helpers/Logger.js').default;
const mongoDB = 'mongodb+srv://ahuey:BingoBongo1977%21@reporting-cluster.g1qrz6i.mongodb.net/jokerdb';

module.exports.connect = async function () {
    const conn = await mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource:"admin",
        ssl: true,
    }).then( () => logger.info('connected to mongo atlas!')).catch( e => logger.error(e));

    return conn;
};
