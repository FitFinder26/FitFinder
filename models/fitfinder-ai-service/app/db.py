from typing import List
import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()  # loads from .env file

DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")


def get_connection():
    return psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        sslmode="require",
    )


def get_items_by_faiss_ids(faiss_ids: List[int]):
    if not faiss_ids:
        return []

    query = """
        SELECT si.*, v.vector_id
        FROM stored_items si
        JOIN item_vector v ON v.item_id = si.item_id
        WHERE v.vector_id = ANY(%s)
    """

    conn = get_connection()
    try:
        with conn.cursor() as cur:
            cur.execute(query, (faiss_ids,))
            rows = cur.fetchall()

            columns = [desc[0] for desc in cur.description]

            return [dict(zip(columns, row)) for row in rows]

    finally:
        conn.close()
