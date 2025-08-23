import React from 'react';
import { FcMenu } from "react-icons/fc";

export default function Header({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="bg-gray-600">
      <div className="mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:text-left justify-between items-center space-y-4 md:space-y-0">
          {/* Partie gauche avec bouton menu et titre */}
          <div className="flex items-center">
            <button 
              className="text-white mr-4 text-2xl focus:outline-none" 
              onClick={toggleSidebar}
              aria-label={isSidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isSidebarOpen ? (
                '✕' // Icône de fermeture
              ) : (
                <FcMenu className="text-3xl bg-white" /> // Icône de menu
              )}
            </button>
            <h1 className="text-white font-bold text-xl md:text-2xl">Dashboard</h1>
          </div>

          {/* Partie droite avec recherche et profil */}
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 ">
            {/* Barre de recherche */}
            <div className="flex w-full md:w-auto">
              <input 
                type="text"
                placeholder="Search..." 
                className="px-3 py-2 rounded-l focus:outline-none w-full md:w-64"
              />
              <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-1 py-1 rounded-r"
              >
                Rechercher
              </button>
            </div>

            {/* Profil utilisateur */}
            <div className="flex items-center space-x-2">
              <span className="text-white text-sm md:text-base">AMANDETE AIME</span>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                DA
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}