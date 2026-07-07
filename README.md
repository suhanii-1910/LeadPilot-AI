# 🚀 LeadPilot AI

An AI-powered Lead Qualification Platform that automatically extracts, analyzes, scores, and prioritizes customer leads using Google Gemini AI.

LeadPilot AI transforms unstructured customer inquiries into structured lead data, intelligently scores each lead, classifies it as **HOT**, **WARM**, or **COLD**, stores the data across multiple platforms, and instantly notifies the sales team about high-priority opportunities.

---

## ✨ Features

- 🤖 AI-powered lead extraction using Google Gemini
- 📊 Intelligent lead scoring (0–100)
- 🔥 Automatic HOT / WARM / COLD classification
- ⭐ Priority assignment (P1, P2, P3)
- 📈 Conversion probability prediction
- 📧 Automatic email alerts for HOT leads
- 🍃 MongoDB integration
- 🟢 Supabase integration
- 📑 Google Sheets integration
- 🎨 Modern Next.js frontend
- ⚡ REST API built with Express & TypeScript

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Axios

### Backend
- Node.js
- Express.js
- TypeScript

### AI
- Google Gemini API

### Database
- MongoDB Atlas
- Supabase

### Integrations
- Google Sheets API
- Gmail API

---

## ⚙️ Workflow

```
Customer Message
        │
        ▼
Google Gemini AI
(Extract Lead Information)
        │
        ▼
Lead Scoring Engine
        │
        ▼
HOT / WARM / COLD Classification
        │
        ├────────► MongoDB
        ├────────► Supabase
        ├────────► Google Sheets
        │
        ▼
Send Gmail Alert (HOT Leads Only)
```

---

## 📁 Project Structure

```
LeadPilot-AI
│
├── frontend
│   ├── app
│   ├── components
│   └── services
│
├── src
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── database
│   ├── models
│   ├── config
│   └── server.ts
│
├── .env.example
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/suhanii-1910/LeadPilot-AI.git
```

### Install backend dependencies

```bash
npm install
```

### Install frontend dependencies

```bash
cd frontend
npm install
```

### Configure Environment Variables

Create a `.env` file using the provided `.env.example` and add your credentials for:

- Google Gemini API
- MongoDB Atlas
- Supabase
- Gmail
- Google Sheets

### Start Backend

```bash
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

---

## 📌 Future Improvements

- User Authentication
- Analytics Dashboard
- CRM Integration
- Lead Search & Filtering
- Export Leads (CSV/PDF)
- Multi-user Support
- AI-generated Follow-up Emails
- Role-based Access Control

---

## 👩‍💻 Author

**Suhani Garg**

- GitHub: https://github.com/suhanii-1910
- LinkedIn:https://www.linkedin.com/in/suhanigarg670

---

## ⭐ If you found this project helpful, consider giving it a star!
