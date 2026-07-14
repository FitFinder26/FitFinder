# FitFinder 👕✨
**AI-Powered Fashion Assistant**

FitFinder is an AI-powered fashion assistant that helps users **search for clothes using images and text, and get outfit compatibility recommendations** — built as a graduation project at Alexandria University's Faculty of Engineering (Computer and Systems Engineering Department), **awarded A+**.

The system combines a multimodal visual + text retrieval engine with an image-only outfit compatibility model ("Smart Wardrobe"), built on top of foundation models (Grounded-SAM, OpenCLIP) without fine-tuning the retrieval backbone.

---

## 🚀 Features

- **Visual + text search** — upload an inspiration image, refine it with text edits (e.g. "change color to red"), and retrieve visually and stylistically similar items.
- **Garment segmentation** — Grounded-SAM isolates individual clothing items from an uploaded photo for open-vocabulary detection.
- **Human-in-the-loop (HITL) refinement** — an interactive step lets users correct segmentation, improving accuracy by ~15% on challenging cases.
- **Bilingual UI** — English/Arabic support via `react-i18next`.
- **Smart Wardrobe (outfit compatibility)** — an image-only compatibility model that scores how well garments go together, with no text input required at inference time.
- **Large-scale retrieval index** — ~25,000 visual embeddings generated from ~7,000 real fashion products, scaled via automated XML sitemap parsing.

---

## 🛠️ Tech Stack

**Frontend**
- React.js (single-page application, component-based architecture)
- React Context API + hooks for state management
- react-i18next for bilingual (EN/AR) support
- Hosted on GitHub Pages

**Backend**
- Spring Boot (Java) — core backend, modular service structure, containerized with Docker
- Deployed on Hugging Face Spaces

**AI Services**
- FastAPI (Python) — distributed microservice for AI inference
- Grounded-SAM — open-vocabulary garment segmentation
- OpenCLIP — vision-language embeddings for image + text fusion
- FAISS — vector similarity search over ~25,000 embeddings

**Storage**
- PostgreSQL (hosted on Aiven.io) — relational metadata, item↔vector cross-reference tables
- Cloudinary — image/media storage
- FAISS — vector database for nearest-neighbor search

---

## 📊 Smart Wardrobe: Results

An image-only, CLIP-enhanced transformer for outfit compatibility, using two custom adaptation techniques (Constant Learnable Text Embedding and a Dictionary Retrieval Technique) so no text is needed at inference time.

| Metric | Result |
|---|---|
| Compatibility Prediction AUC | **0.8996** |
| Fill-in-the-Blank (FITB) Accuracy | **~59-60%** |

These results are competitive with established multimodal baselines (e.g. SCE-Net, OutfitTransformer) that rely on both images *and* text — despite using image-only input.

---

## ⚙️ Setup

1. Clone the repo:
```bash
git clone https://github.com/your-username/FitFinder.git
cd FitFinder
```
2. Run the FastAPI AI service:
```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```
3. Run the Spring Boot backend:
```bash
./mvnw spring-boot:run
```
4. Run the React frontend:
```bash
cd frontend
npm install
npm start
```

---

## 📌 Current Status

✅ Functional end-to-end system: image upload → segmentation → feature extraction → retrieval
✅ HITL refinement interface implemented
✅ Bilingual (English/Arabic) UI implemented
✅ Smart Wardrobe compatibility model trained and evaluated (standalone module)

---

## 🧠 Key Findings

- Grounded-SAM segmented well on clear-silhouette, high-contrast garments.
- OpenCLIP embeddings gave strong similarity matching, particularly on color and shape.
- CPU-only processing averaged ~6 seconds end-to-end per query.
- HITL refinement improved segmentation accuracy by ~15% on challenging cases.


## 👨‍💻 Team

- **Creators:**
  - [Omnia Karem](https://github.com/OmniaKarem)
  - [Mohamed Abdel-Moneim](https://github.com/MohamedAbdo37)
  - [Ibrahim Mohamed](https://github.com/zoaa3054)
  - [Nira Ibrahem](https://github.com/NiraIbrahem)
  - [Ali Hassan](https://github.com/alihassann191)
- **Supervisor:**
  - Dr. Walid Gomaa

## 📜 License

This project is licensed under the [MIT License](LICENSE).
