// TODO вернуть стриктмод
// import React, { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import 'antd/dist/reset.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
