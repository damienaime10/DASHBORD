import React from 'react';
import '../styles/Header.css';

export default function Header({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="header">
      <div className="header-left">
        {/* Bouton menu ajouté ici */}
        <button 
          className="menu-toggle" 
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isSidebarOpen ? '✕' : '☰'}
        </button>
        <h1>Dashboard</h1>
      </div>

      <div className="header-right">
        <div className="header-search">
          <input 
            type="text"
            placeholder="Search..."
          />
          <button type="submit">Rechercher</button>
        </div>
        <div className="header-profile">
          <span>AMANDETE AIME</span>
          <div className="avatar">AM</div>
        </div>
      </div>
    </header>
  );
}