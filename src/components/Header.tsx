function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <a className="brand" href="#inicio" aria-label="Marmitas da Rê">
          <span>Marmitas</span>
          <strong>da Rê</strong>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a className="button button--small" href="#cardapio">
          Faça seu pedido
        </a>
      </div>
    </header>
  )
}

export default Header
