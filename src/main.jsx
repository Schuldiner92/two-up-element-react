import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TwoUpApp } from './TwoUpApp';
import './styles.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <TwoUpApp style={{justifyContent: "center"}}/>
  </StrictMode>,
);
