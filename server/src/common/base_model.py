from sqlalchemy_utils import UUIDType
from flask_sqlalchemy import SQLAlchemy
import uuid

db = SQLAlchemy()


class BaseModel(db.Model):
    """Base data model for all objects"""

    __abstract__ = True
    id = db.Column(UUIDType(binary=False), primary_key=True, default=uuid.uuid4)
