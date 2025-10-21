# News API Project

Full-stack News App

## 📦 Tech Stack
- Backend: Node.js, Express, Axios, NodeCache.
- Frontend: React, TypeScript, Redux Toolkit.
- Uses GNews API as the public news source.

## 🚀 Getting Started
## Requirements
- Node.js v22.x
- npm

## 🛠️ Setup & Run

### 1) Backend
```bash
cd backend
npm install
npm run start:server
```
The backend will run on http://localhost:5001

### 2) Frontend
```bash
cd frontend
npm install
npm run start:client
```
The frontend will run on http://localhost:5173

## 🔌 API Endpoints (Backend)
Endpoint	Description
- GET /api/news/latest?limit=N	 -  Fetch latest N news articles
- GET /api/news/search?q=keyword - Search news articles by keyword

## Notes
- Backend includes NodeCache with 5-minute TTL.
- Frontend uses Redux Toolkit for state management and async logic with thunks.
- Styling is handled with plain HTML/CSS (no UI frameworks used).
