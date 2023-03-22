const mongoose = require('mongoose');
const mongoDB = '';

module.exports.connect = async function () {
    const conn = await mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource:"admin",
        ssl: true,
    }).then( () => console.log('connected to mongo atlas!')).catch( e => console.log(e));

    return conn;
};
