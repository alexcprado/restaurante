function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <a className="brand" href="#">Restaurante</a>
        <nav className="nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#cardapio">Cardápio</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
