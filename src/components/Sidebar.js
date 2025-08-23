import React from 'react';
import '../styles/Sidebar.css';
import { CiSaveDown1 } from "react-icons/ci";
import { FcSettings , FcPortraitMode , FcComboChart} from "react-icons/fc";
import { FiHelpCircle } from "react-icons/fi";
import { ImCoinEuro } from "react-icons/im";


export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <nav>
        <ul>
          <li className="active">
            <span><CiSaveDown1 /></span> Tableau de bord
          </li>
          <li>
            <span><FcPortraitMode /></span> Utilisateurs
          </li>
          <li>
            <span><FcComboChart /></span> Produits
          </li>
          <li>
            <span><ImCoinEuro  className="bg-white"/></span> Commandes
          </li>
          <li>
            <span><FcSettings /></span> Paramètres
          </li>
          <li>
            <span><FiHelpCircle />
</span> Aide
          </li>
        </ul>
      </nav>
    </aside>
  );
}