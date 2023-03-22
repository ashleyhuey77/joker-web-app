'use strict';

const express = require('express');
const testRuns = require('./routes/testRunsRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const conn = require('./helpers/connections');

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
    console.log(`Running on http://${HOST}:${PORT}`);
});
