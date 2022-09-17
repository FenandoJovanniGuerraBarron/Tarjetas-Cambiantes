import { useState } from 'react';
import './App.css'
import Quotebox from './components/Quotebox';
import quotes from "./json/quotes.json"
import color from "./utils/color"

function App() {
//Generador de Indice Random
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
//Quote Random
  const firstQuote= quotes[getIndexRandom(quotes)]
//Color Random
  const firstColor= color[getIndexRandom(color)]
////////////
  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backcolor= {backgroundColor:randomColor}

  const getRandomAll=()=>{
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div style={backcolor} className="App" >
      <Quotebox 
      randomQuote={randomQuote} 
      randomColor={randomColor}
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
