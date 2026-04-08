# 📊 KPI Dashboard (MERN)

Guía rápida para levantar el proyecto en local.

## Estructura

- `backend/`: API Express + MongoDB.
- `frontend/`: App React + Vite.

## Requisitos

- Node.js 20+ (recomendado LTS).
- npm 10+.
- Instancia MongoDB (local o Atlas).

## 1) Instalar dependencias

```bash
# desde la raíz del repo
npm install
npm --prefix backend install
npm --prefix frontend install
```

## 2) Variables de entorno

### Backend (`backend/.env`)

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/kpi_dashboard
JWT_SECRET=changeme
```

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:3000/api
```

> Nota: en Vite las variables deben empezar por `VITE_`.

## 3) Ejecutar en local

Terminal 1 (backend):

```bash
npm --prefix backend run dev
```

Terminal 2 (frontend):

```bash
npm --prefix frontend run dev
```

## 4) URLs locales

- Frontend: `http://localhost:5173`
- Backend healthcheck: `http://localhost:3000/api/health`

## Problemas comunes

- **`vite: not found`** → faltan dependencias en `frontend` (`npm --prefix frontend install`).
- **`MONGO_URI undefined`** → falta archivo `backend/.env` o variable mal escrita.
- **CORS o 404 en `/api`** → verificar que backend esté en `:3000` y frontend en `:5173`.

📧 Si tenés preguntas o sugerencias, podés contactarme a través de GitHub o a mi mail personal: nico.am89@gmail.com