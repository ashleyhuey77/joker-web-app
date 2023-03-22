const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TestRunsSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String },
    browser: { type: String },
    env: { type: String },
    endpoint: { type: String },
    test_reports: [{
        id: {type: String }
    }]
}, { collection: 'runs' });

TestRunsSchema.virtual("url").get(function () {
    return `/test/runs`;
});

let TestRuns = TestRunsSchema;
module.exports = {
  TestRuns,
  default: TestRuns
}
