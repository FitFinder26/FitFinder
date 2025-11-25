import os
import redis
from rq import Worker, Queue

redis_url = os.getenv("REDIS_URL", "redis://localhost:6379")
conn = redis.from_url(redis_url)

queue = Queue("segment_jobs", connection=conn)

if __name__ == "__main__":
    print(f"🚀 Worker connected to Redis at {redis_url}")
    worker = Worker([queue], connection=conn)
    worker.work()
    print("🚀 Worker stopped")