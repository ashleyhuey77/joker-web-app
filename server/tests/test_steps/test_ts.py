from unittest import TestCase
from server.src.teststeps.test_steps import TestSteps


class TestTS(TestCase):
    def test_init_all_data_provided(self):
        ts = TestSteps("12345678", "test", "testing 1234567", "Severe", "In Progress")

        self.assertEqual("12345678", ts.id)
        self.assertEqual("test", ts.name)
        self.assertEqual("testing 1234567", ts.description)
        self.assertEqual("Severe", ts.priority)
        self.assertEqual("In Progress", ts.state)

        self.assertEqual(
            {
                "id": "12345678",
                "name": "test",
                "priority": "Severe",
                "state": "In Progress",
                "description": "testing 1234567",
            },
            ts.to_json(),
        )

    def test_init_all_optional_data_excluded(self):
        ts = TestSteps("12345678", "test", "testing 1234567", None, None)

        self.assertEqual("12345678", ts.id)
        self.assertEqual("test", ts.name)
        self.assertEqual("testing 1234567", ts.description)
        self.assertIsNone(ts.priority)
        self.assertIsNone(ts.state)

        self.assertEqual(
            {
                "id": "12345678",
                "name": "test",
                "priority": None,
                "state": None,
                "description": "testing 1234567",
            },
            ts.to_json(),
        )

    def test_init_priority_only_excluded(self):
        ts = TestSteps("12345678", "test", "testing 1234567", "Severe", None)

        self.assertEqual("12345678", ts.id)
        self.assertEqual("test", ts.name)
        self.assertEqual("testing 1234567", ts.description)
        self.assertEqual("Severe", ts.priority)
        self.assertIsNone(ts.state)

        self.assertEqual(
            {
                "id": "12345678",
                "name": "test",
                "priority": "Severe",
                "state": None,
                "description": "testing 1234567",
            },
            ts.to_json(),
        )

    def test_init_state_only_excluded(self):
        ts = TestSteps("12345678", "test", "testing 1234567", None, "Complete")

        self.assertEqual("12345678", ts.id)
        self.assertEqual("test", ts.name)
        self.assertEqual("testing 1234567", ts.description)
        self.assertIsNone(ts.priority)
        self.assertEqual("Complete", ts.state)

        self.assertEqual(
            {
                "id": "12345678",
                "name": "test",
                "priority": None,
                "state": "Complete",
                "description": "testing 1234567",
            },
            ts.to_json(),
        )
