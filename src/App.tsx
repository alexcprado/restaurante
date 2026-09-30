import Header from './components/Header'
import Hero from './components/Hero'
import MenuPreview from './components/MenuPreview'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuPreview />
      </main>

      <CartDrawer />
      <Footer />
    </>
  )
}

export default App
