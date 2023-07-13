import flask
import logging
from flask_injector import FlaskInjector
from injector import Injector

from .test_steps_controller import blueprint
from .test_steps_model import db
from server.src.common.encoders import FlaskCustomJSONEncoder
from .test_steps_exceptions import TSClientException

from injector import Module
from .test_steps_factory import TestStepsFactory
from .test_steps_service import Service

from .test_steps_repo import TestStepsRepository


class PersonRepositoryModule(Module):
    def configure(self, binder):
        binder.bind(TestStepsRepository)


class FactoryModule(Module):
    def configure(self, binder):
        binder.bind(TestStepsFactory)


class ServiceModule(Module):
    def configure(self, binder):
        binder.bind(Service)


def init_app(config):
    app = flask.Flask(__name__)

    app.config.from_object(config)

    app.json_encoder = FlaskCustomJSONEncoder

    db.init_app(app)

    if not app.testing:
        logging.basicConfig(level=logging.INFO)

    app.register_blueprint(blueprint=blueprint, url_prefix="/")

    # Sentry - only for production

    # Todo uncomment this if you have a sentry DSN
    # if not app.debug and not app.testing and 'SENTRY_DSN' in app.config:
    #     from raven.contrib.flask import Sentry
    #     Sentry(app)

    @app.errorhandler(TSClientException)
    def handle_client_errors(error):
        response = flask.jsonify(error.to_dict())
        response.status_code = error.status_code
        return response

    with app.app_context():
        db.create_all()

        my_injector = Injector([ServiceModule, FactoryModule, PersonRepositoryModule])

        FlaskInjector(app=app, injector=my_injector)

    # No configuration after injection

    return app
