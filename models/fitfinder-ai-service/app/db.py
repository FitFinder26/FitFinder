from typing import List
from save_scraped_items.db import get_connection


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
