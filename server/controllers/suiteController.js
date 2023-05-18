const mongoose = require('mongoose');
//const TestReport = require('../models/testReport');
const logger = require('../utils/Logger.js').default;
const schema = require('../models/test').TestReport;
//SCHEMAS
const TestReport = mongoose.model('TestReport', schema);

exports.index = (request, response) => {
    response.render('base', {

    });
};

exports.add_test_report = async (request, response) => {
    TestReport.create({
        id: request.body.id,
        name: request.body.name,
        test_steps: []
    }).then(response.send(request.body).status(200)).catch((error) => {
      logger.error(error);
    });
    await TestReport.updateOne({id: request.body.id}, {
        $addToSet:
            {
                test_steps: request.body.test_steps
            }
    });
};

exports.delete_test_report = (request, response) => {
    TestReport.deleteOne({ id: request.params.id }, {lean: true}).then(response.send(response.body).status(200)).catch((error) => {
      logger.error(error);
    });
};

exports.test_report = async (request, response) => {
    const resp = await TestReport.findOne({id: request.params.id}).lean();
    response.send(resp).status(200).catch((error) => {
      logger.error(error);
    });
};
