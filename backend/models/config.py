from pydantic import BaseModel

class ConfigDatabase(BaseModel):
    host: str
    port: int
    user: str
    password: str
    name: str

class Config(BaseModel):
    database: ConfigDatabase