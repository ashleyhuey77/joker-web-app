from .test_steps_factory import TestStepsFactory
from injector import inject
from .test_steps_repo import TestStepsRepository


class Service(object):
    @inject
    def __init__(self, factory: TestStepsFactory, test_steps_repo: TestStepsRepository):
        self.__factory = factory
        self.__test_steps_repository = test_steps_repo

    def fetch_all_test_steps(self):
        test_steps = self.__factory.get_all_test_steps()

        return {"test_steps": test_steps}, 200

    def create_test_steps(self, body):
        test_steps = self.__factory.create_test_steps_model(body)
        self.__test_steps_repository.save(test_steps)
        test_steps = self.__factory.create_test_steps_resource_from_model(test_steps)

        return test_steps, 201

    def get_test_step(self, id: str):
        test_step = self.__factory.get_test_steps_model(id)

        return self.__factory.create_test_steps_resource_from_model(test_step), 200
