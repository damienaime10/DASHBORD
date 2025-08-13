import React from 'react'
import '../styles/Sidebar.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© 2025 Dashboard Statique - Friare</span>
        <div className="footer-links">
          <a href="#terms">Conditions</a>
          <a href="#privacy">Confidentialité</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
