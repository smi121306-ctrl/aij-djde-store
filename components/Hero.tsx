export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Aij<br />Djde</h1>
        <p>Официальный магазин в Москве<br/>Премиальные аксессуары для Apple<br/>Бесплатная доставка!</p>
        <button className="hero-btn">Новинки</button>
      </div>
      <div className="hero-images">
        <div style={{
          width: '250px',
          height: '300px',
          background: '#e8e8e8',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '4rem'
        }}>🎧</div>
      </div>
    </section>
  )
}