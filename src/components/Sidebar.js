import React from 'react';
import '../styles/Sidebar.css';

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <nav>
        <ul>
          <li className="active">
            <span>📊</span> Tableau de bord
          </li>
          <li>
            <span>👥</span> Utilisateurs
          </li>
          <li>
            <span>📦</span> Produits
          </li>
          <li>
            <span>📝</span> Commandes
          </li>
          <li>
            <span>⚙️</span> Paramètres
          </li>
          <li>
            <span>🆘</span> Aide
          </li>
        </ul>
      </nav>
    </aside>
  );
}