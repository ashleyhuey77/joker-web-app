from typing import Optional
from server.src.common.base_model import BaseModel, db


class TestSteps(BaseModel):
    __tablename__ = "TestSteps"

    name = db.Column(db.Unicode)
    priority = db.Column(db.Unicode)
    state = db.Column(db.Unicode)
    description = db.Column(db.Unicode)

    def __init__(
        self,
        name: str,
        description: str,
        priority: Optional = None,
        state: Optional = None,
    ):
        self.name = name
        self.priority = priority
        self.state = state
        self.description = description
