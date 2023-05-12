const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TestReportSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    test_steps: [{
        step_no: {type: String},
        title: {type: String},
        description: {type: String},
        status: {type: String},
        time_stamp: {type: String}
    }]
}, { collection: 'reports' });

TestReportSchema.virtual("url").get(function () {
    return `/test/report/${this._id}`;
});

let Test = TestReportSchema;
module.exports = {
  TestReport: Test,
  default: Test
}
