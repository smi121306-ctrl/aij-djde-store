export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>Информация</h3>
          <ul>
            <li><a href="#">Доставка</a></li>
            <li><a href="#">Самовывоз</a></li>
            <li><a href="#">Оплата</a></li>
            <li><a href="#">Подарочные карты</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>О компании</h3>
          <ul>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Контакта</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Подарочные карты</h3>
          <ul>
            <li><a href="#">Купить карту</a></li>
            <li><a href="#">Условия</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo" style={{ marginBottom: '1rem' }}>◆ Aij Djde</div>
        <p>&copy; 2024 Aij Djde. Все права защищены.</p>
      </div>
    </footer>
  )
}