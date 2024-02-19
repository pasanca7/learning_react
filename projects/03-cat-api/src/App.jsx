import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
import { Otro } from './components/otro.jsx'

function App() {
  const { fact, refreshFact} = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Cats application!</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        <p>{fact}</p>
        <img src={imageUrl} alt={`Image of a cat with the word ${fact.split(' ')[0]}`} />
        <Otro/>
      </section>
    </main>
  )
}

export default App
