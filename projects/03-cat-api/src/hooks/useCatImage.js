import { useEffect, useState } from "react"

const PREFIX_CAT_PIC_ENDPOINT = 'https://cataas.com/cat/says/'

export function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState('https://cataas.com/cat')
  
    useEffect(() => {
      if (!fact) return
        const firstWord = fact.split(' ')[0]
        fetch(PREFIX_CAT_PIC_ENDPOINT + firstWord)
        .then(res => setImageUrl(res.url))
    }, [fact])
  
    return { imageUrl }
  }
  