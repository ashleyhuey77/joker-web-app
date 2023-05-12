const mongoose = require('mongoose');
//const TestReport = require('../models/testReport');
const schema = require('../models/test').TestReport;
//SCHEMAS
const TestReport = mongoose.model('TestReport', schema);

exports.index = (request, response, next) => {
    response.render('base', {

    });
};

exports.add_test_report = async (request, response, next) => {
    TestReport.create({
        id: request.body.id,
        name: request.body.name,
        test_steps: []
    }).then(response.send(request.body).status(200));
    await TestReport.updateOne({id: request.body.id}, {
        $addToSet:
            {
                test_steps: request.body.test_steps
            }
    });
};

exports.delete_test_report = (request, response, next) => {
    TestReport.deleteOne({ id: request.params.id }, {lean: true}).then(response.send(response.body).status(200))
};

exports.test_report = async (request, response, next) => {
    const resp = await TestReport.findOne({id: request.params.id}).lean();
    response.send(resp).status(200);
};
