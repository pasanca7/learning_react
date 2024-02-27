import { useState } from "react"
import { Products } from "./components/Products.jsx"
import {products as initialProducts} from "./mocks/products.json"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { useFilters } from "./hooks/useFilters.js"


function App() {
  const [products] = useState(initialProducts)
  const {filters, filterProducts, setFilters} = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header />
      <Products products={filteredProducts}/>
      <Footer filters={filters}/>
    </>
  )
}

export default App
