from typing import List
from .test_steps import TestSteps
from .test_steps_exceptions import (
    TestStepNotFoundException,
    TestStepMissingPropertyException,
)
from .test_steps_model import TestSteps as TestStepsModel


class TestStepsFactory(object):
    def get_all_test_steps(self) -> List[TestSteps]:
        test_steps = [
            TestSteps(
                id=test_steps_model.id,
                name=test_steps_model.name,
                description=test_steps_model.description,
                priority=test_steps_model.priority,
                state=test_steps_model.state,
            )
            for test_steps_model in TestStepsModel.query.all()
        ]
        return test_steps

    def create_test_steps_model(self, body):
        try:
            test_steps = TestStepsModel(
                body["name"],
                body["description"],
                body.get("priority", None),
                body.get("state", None),
            )
            return test_steps
        except KeyError as e:
            raise TestStepMissingPropertyException(property_name=str(e))

    def create_test_steps_resource_from_model(self, test_steps_model: TestStepsModel):
        test_steps_resource = TestSteps(
            id=test_steps_model.id,
            name=test_steps_model.name,
            description=test_steps_model.description,
            priority=test_steps_model.priority,
            state=test_steps_model.state,
        )
        return test_steps_resource

    def get_test_steps_model(self, id: str):
        test_steps = TestStepsModel.query.get(id)

        if test_steps is None:
            raise TestStepNotFoundException()

        return test_steps
