# C-_youtube_like_site

Scaffold for a YouTube-like site:

- **Backend:** C++ with [Drogon](https://drogon.org/)
- **Frontend:** React with Vite

## Project structure

- `/backend` - Drogon server scaffold
- `/frontend` - React app scaffold

## Run the backend

Prerequisite: install Drogon and CMake build tools.

```bash
cd backend
cmake -S . -B build
cmake --build build
./build/youtube_like_backend
```

The backend listens on `http://localhost:8080` and exposes:

- `GET /api/health`

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173`.
