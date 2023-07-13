from abc import ABC, abstractmethod


class Resource(ABC):
    @abstractmethod
    def to_json(self) -> dict:
        raise NotImplementedError("Please implement this method")
