from unittest import TestCase
from unittest.mock import patch

from server.src.teststeps.test_steps_model import TestSteps


class TestPerson(TestCase):
    def testConstructPersonWithNoBirthDate(self):
        with patch("flask_sqlalchemy._QueryProperty.__get__", autospec=True):
            test_steps = TestSteps(
                name="test_some_innocuous_thing", description="log in to the app"
            )

            self.assertEqual("test_some_innocuous_thing", test_steps.name)
            self.assertEqual("log in to the app", test_steps.description)
            self.assertIsNone(test_steps.id)

    def testConstructPersonWithBirthDate(self):
        with patch("flask_sqlalchemy._QueryProperty.__get__", autospec=True):
            person = TestSteps(
                name="test_some_innocuous_thing", description="log in to the app"
            )

            self.assertEqual("john", person.name)
            self.assertEqual("01/01/1975", person.birth_date)
            self.assertIsNone(person.id)
