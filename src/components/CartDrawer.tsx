function CartDrawer() {
  return (
    <aside className="cart-drawer cart-drawer--preview" aria-label="Prévia do carrinho">
      <div className="cart-drawer__header">
        <div>
          <span className="eyebrow">Seu pedido</span>
          <h2>Carrinho</h2>
        </div>

        <button className="icon-button" type="button" aria-label="Fechar carrinho">
          ×
        </button>
      </div>

      <div className="cart-empty">
        <span className="cart-empty__icon">♡</span>
        <h3>Seu carrinho está vazio</h3>
        <p>Adicione uma marmita para começar seu pedido.</p>
      </div>

      {/*
        DESAFIO:
        Quando você implementar a lógica, este estado vazio deverá dar lugar
        à lista de produtos adicionados ao carrinho.

        Pense em:
        - produto
        - quantidade
        - subtotal do item
        - aumentar/diminuir quantidade
        - remover item

        A lógica NÃO foi implementada de propósito.
      */}

      <div className="cart-drawer__summary">
        <div>
          <span>Total</span>
          <strong>R$ 0,00</strong>
        </div>

        <button className="checkout-button" type="button" disabled>
          Finalizar pedido
        </button>
      </div>
    </aside>
  )
}

export default CartDrawer
