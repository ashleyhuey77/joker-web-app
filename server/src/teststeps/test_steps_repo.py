from .test_steps_model import db, TestSteps


class TestStepsRepository(object):
    def save(self, test_step: TestSteps):
        db.session.add(test_step)
        db.session.commit()

    def remove(self, test_step: TestSteps):
        db.session.delete(test_step)
        db.session.commit()
