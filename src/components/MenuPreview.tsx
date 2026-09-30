type MenuItem = {
  id: number
  name: string
  description: string
  price: number
  category: 'Pratos feitos' | 'Marmitas'
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Marmita Tradicional',
    description: 'Arroz, feijão, proteína, salada e acompanhamento.',
    price: 18,
    category: 'Marmitas',
  },
  {
    id: 2,
    name: 'Prato do Dia',
    description: 'Uma refeição completa preparada especialmente no dia.',
    price: 22,
    category: 'Pratos feitos',
  },
  {
    id: 3,
    name: 'Marmita Caseira',
    description: 'Comida simples, saborosa e com aquele gostinho de casa.',
    price: 20,
    category: 'Marmitas',
  },
  {
    id: 4,
    name: 'Prato Especial',
    description: 'Uma opção diferente para variar o almoço durante a semana.',
    price: 24,
    category: 'Pratos feitos',
  },
  {
    id: 5,
    name: 'Marmita Tradicional',
    description: 'Arroz, feijão, proteína, salada e acompanhamento.',
    price: 18,
    category: 'Marmitas',
  },
  {
    id: 6,
    name: 'Prato do Dia',
    description: 'Uma refeição completa preparada especialmente no dia.',
    price: 22,
    category: 'Pratos feitos',
  },
  {
    id: 7,
    name: 'Marmita Caseira',
    description: 'Comida simples, saborosa e com aquele gostinho de casa.',
    price: 20,
    category: 'Marmitas',
  },
  {
    id: 8,
    name: 'Prato Especial',
    description: 'Uma opção diferente para variar o almoço durante a semana.',
    price: 24,
    category: 'Pratos feitos',
  },
]

function MenuPreview() {
  return (
    <section className="menu-section" id="cardapio">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Nosso cardápio</span>
          <h2>Pratos feitos com carinho</h2>
          <p>Opções variadas e sempre fresquinhas para você escolher.</p>
        </div>

        <div className="filters" aria-label="Categorias do cardápio">
          <button className="filter filter--active" type="button">Todos</button>
          <button className="filter" type="button">Pratos feitos</button>
          <button className="filter" type="button">Marmitas</button>
          <button className="filter" type="button">Bebidas</button>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <article className="menu-card" key={item.id}>
              <div className="menu-card__image">
                <span>Foto</span>
              </div>

              <div className="menu-card__body">
                <small>{item.category}</small>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <strong>
                  {item.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </strong>

                <button className="add-button" type="button">
                  Adicionar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuPreview
