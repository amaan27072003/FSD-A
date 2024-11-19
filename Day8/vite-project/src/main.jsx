import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css';
import App from './App.jsx';
import Marks from './Marks.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App Name={"Amaan Ansari"} Email={"zj5eA@example.com"} Moblile={"+923000000000"} />
    <Marks m1={85} m2={87} m3={89} />
    <Marks m1={83} m2={65} m3={74} />
  </StrictMode>,
)
