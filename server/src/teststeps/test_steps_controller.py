from flask import Blueprint, jsonify, request, Response
from injector import inject
from .test_steps_service import Service

blueprint = Blueprint("library", __name__)


@blueprint.route("test/steps", methods=["GET"])
@inject
def get_test_steps(service: Service) -> Response:
    result = service.fetch_all_test_steps()
    response = jsonify(result[0])
    response.status_code = result[1]
    return response


@blueprint.route("test/steps", methods=["POST"])
@inject
def create_person(service: Service) -> Response:
    body = request.get_json(force=True)
    result = service.create_test_steps(body)
    response = jsonify(result[0])
    response.status_code = result[1]
    return response


@blueprint.route("test/steps/<string:id>", methods=["GET"])
@inject
def get_person(service: Service, id: str) -> Response:
    result = service.get_test_step(id)
    response = jsonify(result[0])
    response.status_code = result[1]
    return response
