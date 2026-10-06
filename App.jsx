import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

// Fetch product information from Express API
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const initialQuantities = {};
        data.forEach((p) => {
          initialQuantities[p.id] = 0;
        });
        setQuantities(initialQuantities);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);


//quantity change function 
  const handleQuantityChange = (productId, value) => {
    setQuantities((currentQuantities) => ({
      ...currentQuantities,
      [productId]: parseInt(value, 10) || 0,
    }));
  };

//Total price of each product changes based on the quantity
  const calculateTotal = () => {
    return products.reduce((total, product) => {
      const qty = quantities[product.id] || 0;
      return total + product.price * qty;
    }, 0);
  };

  return (
    <div className="container">
      <h1>Product List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Product ID</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={quantities[product.id] || 0}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                />
              </td>
              <td>
                ${(product.price * (quantities[product.id] || 0)).toFixed(2)}
              </td>
            </tr>
          ))}
          <tr>
            <div className="totalSection">
            <td colSpan="4"><strong>Grand Total</strong></td>
            <td id="grand-total"><strong>${calculateTotal().toFixed(2)}</strong></td>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;