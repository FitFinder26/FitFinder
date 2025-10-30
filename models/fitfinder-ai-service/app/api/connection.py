from fastapi import APIRouter

route= APIRouter()

@route.get("/")
async def check_service_health():
    return {"status": "ok", "message": "Service is still alive LOL.", "service": "fitfinder-ai"}


