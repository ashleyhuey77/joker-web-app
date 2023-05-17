const mongoose = require('mongoose');
const schema = require('../models/suite').Suite;
//SCHEMAS
const Suite = mongoose.model('Suite', schema);

exports.index = (request, response, next) => {
    response.render('base', {

    });
};

exports.add_test_run = async (request, response, next) => {
    Suite.create({
        id: request.body.id,
        name: request.body.name,
        status: request.body.status,
        browser: request.body.browser,
        env: request.body.env,
        endpoint: request.body.endpoint,
        test_reports: []
    }).then(response.send(request.body).status(200));
    await Suite.updateOne({id: request.body.id}, {
        $addToSet:
            {
                test_reports: request.body.test_reports
            }
    });
};

exports.delete_test_run = (request, response, next) => {
    Suite.deleteOne({ id: request.params.id }, {lean: true}).then(response.send(response.body).status(200))
};

exports.test_runs_list = async (request, response, next) => {
    const resp = await Suite.find({});
    response.send(resp).status(200);
};

exports.test_run = async (request, response, next) => {
    const resp = await Suite.findOne({id: request.params.id}).lean();
    response.send(resp).status(200);
};