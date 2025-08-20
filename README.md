# Patient Management Dashboard

## Setup Instructions

1. Create project with Vite + React
   ```bash
   npm create vite@latest . -- --template react
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run development server
   ```bash
   npm run dev
   ```

The app will usually start on **http://localhost:5173**.  
If 5173 is already in use, Vite will automatically use the next available port (e.g., 5174, 5175).

---

## Router

This project uses **React Router**.  
Patient detail pages can be accessed through dynamic routes:

```
/patients/:id
```

Example:

[http://localhost:5173/patients/12](http://localhost:5173/patients/12)
