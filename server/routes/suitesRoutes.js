const express = require('express');
const router = express.Router();
const logger = require('../utils/Logger.js').default;

const test_run_controller = require('../controllers/testController');
const test_report_controller = require('../controllers/suiteController');

router.use((req, res, next) => {
    logger.info('Time: ', Date.now())
    next()
})

//TEST RUNS
router.get('/', test_run_controller.index);

router.post('/test/runs', test_run_controller.add_test_run);

router.delete('/test/runs/:id', test_run_controller.delete_test_run);

router.get('/test/runs', test_run_controller.test_runs_list);

router.get('/test/runs/:id', test_run_controller.test_run);

//TEST REPORT

router.get('/test/report', test_report_controller.index);

router.post('/test/report', test_report_controller.add_test_report);

router.delete('/test/report/:id', test_report_controller.delete_test_report);

router.get('/test/report/:id', test_report_controller.test_report);

module.exports = router;
