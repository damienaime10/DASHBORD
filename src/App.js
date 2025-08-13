import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import DataTable from './components/DataTable';
import React, { useState } from 'react'; // Ajoutez { useState } à l'import

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Header 
        toggleSidebar={toggleSidebar} 
        isSidebarOpen={isSidebarOpen} 
      />
      <div className="main-content">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="content">
          {/* Seul ce contenu défilera */}
          <div className="cards-container">
            <Card title="Utilisateurs" value="1,254" icon="👥" />
            <Card title="Revenus" value="$8,542" icon="💰" />
            <Card title="Taux de conversion" value="3.2%" icon="📈" />
            <Card title="Satisfaction" value="4.6/5" icon="⭐" />
          </div>
          <div className="charts-container">
            <BarChart />
            <PieChart />
          </div>
          <DataTable />
        </div>
      </div>
    </div>
  );
}
export default App;
