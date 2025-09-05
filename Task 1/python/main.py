from fastapi import FastAPI

app = FastAPI()

@app.get("/hello")
def read_hello():
    return {"message": "Hello, API!"}

# To start the server = python -m uvicorn main:app --reload --port 8080