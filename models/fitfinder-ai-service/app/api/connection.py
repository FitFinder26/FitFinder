from fastapi import APIRouter

route= APIRouter()

@route.get("/")
async def check_service_health():
    return {"status": "ok", "service": "fitfinder-ai"}


