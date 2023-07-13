from flask import json, Response


class FlaskCustomJSONEncoder:
    def default(self, obj) -> Response:
        return json.jsonify(obj)
