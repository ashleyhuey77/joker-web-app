from typing import Optional
from server.src.common.resources import Resource


class TestSteps(Resource):
    id = None
    name = None
    priority = None
    state = None
    description = None

    def __init__(
        self, id: str, name: str, description: str, priority: Optional, state: Optional
    ):
        self.id = id
        self.name = name
        self.priority = priority
        self.state = state
        self.description = description

    def to_json(self) -> dict:
        return dict(
            id=self.id,
            name=self.name,
            priority=self.priority,
            state=self.state,
            description=self.description,
        )
