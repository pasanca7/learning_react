import { useState } from "react"
import { Products } from "./components/Products.jsx"
import {products as initialProducts} from "./mocks/products.json"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { useFilters } from "./hooks/useFilters.js"
import { Cart } from "./components/Cart.jsx"
import { CartProvider } from "./context/cart.jsx"


function App() {
  const [products] = useState(initialProducts)
  const {filters, filterProducts, setFilters} = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <Header />
      <Cart/>
      <Products products={filteredProducts}/>
      <Footer filters={filters}/>
    </CartProvider>
  )
}

export default App
