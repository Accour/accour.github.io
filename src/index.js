import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  /**
   * 严格模式节点需要去掉
   * 可能会影响useEffect的执行时机
   */
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)