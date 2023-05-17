'use strict';

const express = require('express');
const testRuns = require('./routes/suitesRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const conn = require('./helpers/connections');
const logger = require('../../client/src/components/global/helpers/Logger.js').default;

const app = express();

// CONSTANTS
const PORT = 4000;
const HOST = '0.0.0.0';

//app
app.use (bodyParser.urlencoded( {extended : true} ) );
app.use(bodyParser.json())
app.use(cors())

//APP
conn.connect();
app.use("/", testRuns);

app.listen(PORT, HOST, () => {
    logger.info(`Running on http://${HOST}:${PORT}`);
});
