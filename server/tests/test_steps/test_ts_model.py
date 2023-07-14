from unittest import TestCase
from server.src.teststeps.test_steps_model import TestSteps


class TestPerson(TestCase):
    def testConstructTestStepsWithNoOptionals(self):
        test_steps = TestSteps(
            name="test_some_innocuous_thing", description="log in to the app"
        )

        self.assertEqual("test_some_innocuous_thing", test_steps.name)
        self.assertEqual("log in to the app", test_steps.description)
        self.assertIsNone(test_steps.id)

    def testConstructTestStepsWithAllOptionals(self):
        test_steps = TestSteps(
            name="test_some_innocuous_thing",
            description="log in to the app",
            priority="LOTS",
            state="DONE",
        )

        self.assertEqual("test_some_innocuous_thing", test_steps.name)
        self.assertEqual("log in to the app", test_steps.description)
        self.assertEqual("LOTS", test_steps.priority)
        self.assertEqual("DONE", test_steps.state)
        self.assertIsNone(test_steps.id)
