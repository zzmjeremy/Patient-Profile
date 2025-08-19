import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import PatientProfile from './pages/PatientProfile.jsx';

const router = createBrowserRouter([
  {
    path: '/patients/:id',
    element: <PatientProfile />,
  },
  {
    path: '/',
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
