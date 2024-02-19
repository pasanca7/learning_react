import { useState, useEffect } from 'react'
import './App.css'
import { getRandomFact } from './services/facts.js'

const PREFIX_CAT_PIC_ENDPOINT = 'https://cataas.com/cat/says/'

function App() {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState('https://cataas.com/cat')

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])


  useEffect(() => {
    if (!fact) return
      const firstWord = fact.split(' ')[0]
      fetch(PREFIX_CAT_PIC_ENDPOINT + firstWord)
      .then(res => setImageUrl(res.url))
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>Cats application!</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        <p>{fact}</p>
        <img src={imageUrl} alt={`Image of a cat with the word ${fact.split(' ')[0]}`} />
      </section>
    </main>
  )
}

export default App
