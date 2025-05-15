import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Relógio Classic', price: 15000, image: '/products/relogios.jpg' },
  { id: 2, name: 'Camisa Polo', price: 10000, image: '/products/roupas.jpg' },
  { id: 3, name: 'Tênis Esportivo', price: 20000, image: '/products/calcados.jpg' },
  { id: 4, name: 'Carteira Couro', price: 7000, image: '/products/acessorios.jpg' }
];

export default function BelkStore() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Loja BELK</h1>
      <p>Tel: 948 075 787 | WhatsApp: 940 848 513 | Email: info.markuscompany@gmail.com</p>
      <h2>Produtos</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>Preço: Kz {product.price.toLocaleString()}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
      <h2>Carrinho</h2>
      {cart.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - Kz {item.price.toLocaleString()}{' '}
              <button onClick={() => removeFromCart(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: Kz {total.toLocaleString()}</h3>
      <button disabled={cart.length === 0}>Finalizar compra</button>
    </div>
  );
}
