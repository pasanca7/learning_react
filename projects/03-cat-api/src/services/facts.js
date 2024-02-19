const FACT_ENDPOINT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const res = await fetch(FACT_ENDPOINT)
    const data = await res.json()
    const fact = data.fact
    return fact
}
