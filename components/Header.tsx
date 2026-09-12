'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <div className="header-logo">◆</div>
      <nav className="header-nav">
        <ul className="nav-links">
          <li><a href="#sale">Sale</a></li>
          <li><a href="#new">New</a></li>
        </ul>
      </nav>
      <div className="header-icons">
        <button className="icon-btn">♡</button>
        <button className="icon-btn">👤</button>
        <button className="icon-btn">🛒</button>
        <button className="icon-btn menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
      </div>
    </header>
  )
}