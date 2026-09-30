type MenuItem = {
  id: number
  name: string
  description: string
  price: number
}

const menuItems: MenuItem[] = [
  { id: 1, name: 'Marmita tradicional', description: 'Arroz, feijão, acompanhamento e proteína.', price: 24.9 },
  { id: 2, name: 'Prato do dia', description: 'Uma opção especial preparada no dia.', price: 29.9 },
  { id: 3, name: 'Marmita pequena', description: 'Uma opção menor para uma refeição leve.', price: 19.9 },
]

function MenuPreview() {
  return (
    <section className="menu-section" id="cardapio">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Cardápio temporário</span>
          <h2>Algumas opções</h2>
          <p>Produtos fictícios apenas para estruturar a interface inicial.</p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <article className="menu-card" key={item.id}>
              <div className="menu-card__image" aria-hidden="true">🍽️</div>
              <div className="menu-card__body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <strong>
                  {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuPreview
