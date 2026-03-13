# FitFinder 👕✨
**AI-Powered Fashion Assistant (Prototype)**

FitFinder is a prototype web application that helps users **find clothes online, manage their digital wardrobe, and get outfit recommendations**.  
Right now, we are focusing on building the **core AI pipeline** and **basic backend services**.

---

## 🚀 Features (Prototype Stage)
- Upload a clothing photo → get similar items (CV pipeline).  
- Add wardrobe items → store your clothes digitally.  
- Outfit suggestion → basic combinations from database + wardrobe.  

---

## 🛠️ Tech Stack
- **Backend Frameworks:** Spring Boot, FastAPI  
- **Computer Vision:** SAM (Segment Anything Model), OpenCLIP  
- **NLP:** FAISS for handling fashion-related queries  

---

## ⚙️ Setup (Prototype)
1. Clone the repo:
```bash
git clone https://github.com/your-username/FitFinder.git
cd FitFinder
```

2. Run FastAPI service:
```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

3. Run Spring Boot service:
```bash
./mvnw spring-boot:run
```

---

## 📌 Current Status
✅ Initial prototype in progress  
🔄 Integrating CV + NLP models  
🔜 Frontend & full UI will come later  

---

## 🗺️ Roadmap
- [X] Integrate SAM + OpenCLIP for clothing detection & matching  
- [ ] Implement wardrobe storage feature  
- [ ] Basic outfit suggestion engine  
- [X] Frontend prototype (React/Angular/Vue)  
- [X] Connect with sample clothing dataset  
- [ ] Optimize NLP pipeline for fashion queries  
- [ ] Full integration testing  

---

## 👨‍💻 Team
- **Creators:**
  - [Omnia Karem](https://github.com/OmniaKarem)  
  - [Mohamed Abdel-Moneim](https://github.com/MohamedAbdo37)  
  - [Ibrahim Mohamed](https://github.com/zoaa3054)  
  - [Nira Ibrahem](https://github.com/NiraIbrahem)
  - [Ali Hassan](https://github.com/alihassann191)  

- **Supervisor:**  
  - Name: Dr. Walid Gomaa  
  - Email: walid.gomaa@gmail.com 

---

## 🔮 Future Work
- Full-featured frontend  
- Advanced outfit recommendation engine  
- Integration with real e-commerce APIs  
- Mobile app version  

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).
