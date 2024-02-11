import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * Rend le composant racine de l'application dans le DOM.
 * Utilise React.StrictMode pour activer le mode strict de React.
 * @module index
 */

// Rend le composant racine dans le DOM en utilisant ReactDOM.createRoot
// et active le mode strict avec React.StrictMode
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
