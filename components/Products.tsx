'use client'

import { useState } from 'react'

const productData = [
  {
    id: 1,
    name: 'iPhone Case Blue',
    price: '54 790 ₽',
    emoji: '📱'
  },
  {
    id: 2,
    name: 'Premium Headphones',
    price: '36 690 ₽',
    emoji: '🎧'
  },
  {
    id: 3,
    name: 'iPhone Case Green',
    price: '11 290 ₽',
    emoji: '📱'
  },
  {
    id: 4,
    name: 'Wireless Charger',
    price: '44 290 ₽',
    emoji: '⚡'
  },
  {
    id: 5,
    name: 'Smart Speaker',
    price: '74 790 ₽',
    emoji: '🔊'
  },
  {
    id: 6,
    name: 'Headphones Pro',
    price: '45 990 ₽',
    emoji: '🎧'
  }
]

export default function Products() {
  const [cart, setCart] = useState<number[]>([])

  const handleAddToCart = (productId: number) => {
    setCart([...cart, productId])
    alert(`Товар добавлен в корзину!`)
  }

  return (
    <section className="products-section">
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Популярные товары</h2>
      <div className="products-grid">
        {productData.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <div style={{ fontSize: '5rem' }}>{product.emoji}</div>
            </div>
            <div className="product-info">
              <div className="product-price">{product.price}</div>
              <button 
                className="buy-btn"
                onClick={() => handleAddToCart(product.id)}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}