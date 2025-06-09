import tomllib as tl
from models.config import Config

with open("config.toml", "rb") as f:
    config = tl.load(f)
    print(Config(**config).model_dump())

from sqlalchemy.orm import DeclarativeBase
class Base(DeclarativeBase):
    ...

print(Base.metadata)