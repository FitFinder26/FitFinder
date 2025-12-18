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


def create_table():
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
    CREATE TABLE IF NOT EXISTS stored_items (
        item_id SERIAL PRIMARY KEY,
        item_faiss_id BIGINT,
        title TEXT,
        price REAL,
        currency TEXT,
        item_web_url TEXT,
        image_url TEXT,
        category TEXT,
        description TEXT,
        source TEXT
    );
    """)

    conn.commit()
    cur.close()
    conn.close()


def insert_item_metadata(
    faiss_id, title, price, currency,
    item_web_url, image_url, category,
    description, source
):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO stored_items (
            item_faiss_id, title, price, currency,
            item_web_url, image_url, category,
            description, source
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);
    """, (
        faiss_id, title, price, currency,
        item_web_url, image_url, category,
        description, source
    ))

    conn.commit()
    cur.close()
    conn.close()
