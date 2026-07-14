import redis
from rq import Queue

# Connect to Redis (default host and port)
redis_conn = redis.Redis(host="localhost", port=6379, db=0)

# Create a queue for segmentation jobs
segment_queue = Queue("segment_jobs", connection=redis_conn)

# Create a queue for re-segmentation jobs
resegment_queue = Queue("resegment_jobs", connection=redis_conn)
