function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__content">
        <div className="hero__copy">
          <span className="eyebrow">Comida caseira de verdade</span>
          <h1>
            Sabor de casa,
            <em> no seu dia a dia.</em>
          </h1>
          <p>
            Marmitas preparadas diariamente com ingredientes frescos,
            simplicidade e muito carinho.
          </p>

          <a className="button" href="#cardapio">
            Ver cardápio
          </a>
        </div>

        <div className="hero__visual" aria-label="Espaço reservado para foto principal">
          <span>Foto principal</span>
          <small>Vamos substituir pelas fotos reais depois</small>
        </div>
      </div>
    </section>
  )
}

export default Hero
