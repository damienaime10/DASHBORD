import React from 'react';
import '../styles/DataTable.css';

const data = [
  { id: 1, nom: 'Produit A', categorie: 'Électronique', prix: 299, stock: 45 },
  { id: 2, nom: 'Produit B', categorie: 'Vêtements', prix: 49, stock: 120 },
  { id: 3, nom: 'Produit C', categorie: 'Alimentation', prix: 5, stock: 200 },
  { id: 4, nom: 'Produit D', categorie: 'Électronique', prix: 599, stock: 12 },
  { id: 5, nom: 'Produit E', categorie: 'Maison', prix: 79, stock: 65 },
  { id: 6, nom: 'Produit F', categorie: 'Vêtements', prix: 29, stock: 89 },
  { id: 7, nom: 'Produit G', categorie: 'Alimentation', prix: 3, stock: 300 },
];

const DataTable = () => {
  return (
    <div className="table-container">
      <h2>Liste des produits</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Catégorie</th>
            <th>Prix</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>{item.categorie}</td>
              <td>${item.prix}</td>
              <td>
                <span className={`stock ${item.stock < 50 ? 'low' : ''}`}>
                  {item.stock}
                </span>
              </td>
              <td>
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;