# test_endpoints.py (or test_endpoint.py)
from fastapi import APIRouter

# 1. Define the router
router = APIRouter()

# 2. Define an endpoint function that uses the router
@router.get("/")
async def read_test_root():
    return {"message": "Hello from the test endpoint router!"}

