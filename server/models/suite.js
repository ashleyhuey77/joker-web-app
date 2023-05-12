const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SuiteSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String },
    browser: { type: String },
    env: { type: String },
    endpoint: { type: String },
    test_reports: [{
        id: {type: String },
        name: {type: String },
        status: {type: String}
    }]
}, { collection: 'runs' });

SuiteSchema.virtual("url").get(function () {
    return `/test/runs`;
});

let Suite = SuiteSchema;
module.exports = {
  Suite: Suite,
  default: Suite
}
