import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = () => {
  const [product, setProduct] = useState({ name: '', price: '', brand: '',image:'', });
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAdd = () => {
    if (product.name && product.price && product.brand) {
      setProducts([...products, product]);
      setProduct({ name: '', price: '', brand: '' });
    }
  };

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
      />
      <input
       type="text"
       name="image"
       placeholder="Product Image URL"
      value={product.image}
      onChange={handleChange}
/>

      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={product.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="brand"
        placeholder="Product Brand"
        value={product.brand}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add Product</button>

      <div className="product-table">
        <h3>Product List</h3>
        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
            <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.brand}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        )}
      </div>
    </div>
  );
};

export default ProductForm;
