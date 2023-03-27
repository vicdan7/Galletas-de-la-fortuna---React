import './App.css'
import phrases from "./utils/phrases.json"
import Btn from './assets/components/Btn'
import Phrase from './assets/components/Phrase'
import randomPhrase from './utils/randomPhrase'
import { useState } from 'react'

const imgs = [1, 2, 3, 4]

function App() {

 const [phraseRandom, setphraseRandom] = useState(randomPhrase(phrases));
 const [numberImg, setnumberImg] = useState(randomPhrase(imgs));
 
 const appStyle = {
    backgroundImage: `url('/backgrounds/images-fortuna/fondo${numberImg}.jpg')`
 }

return (
    <div style={appStyle} className="App">
      <h1 className='title_style'>GALLETAS DE LA FORTUNA</h1>
      <Phrase phraseRandom={phraseRandom}/>
      <Btn setphraseRandom={setphraseRandom} setnumberImg={setnumberImg} />
    </div>
  )
}

export default App
