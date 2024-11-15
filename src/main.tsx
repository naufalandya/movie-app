import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/" element={<App />}> 
        <Route index element={<Navigate to="/home"/>} /> 
        <Route path="home" element={<App />} />
      </Route>

    </Routes>
  </BrowserRouter>
);