import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
const app = (
  <StrictMode>
      <App />
  </StrictMode>
);

root.render(app);