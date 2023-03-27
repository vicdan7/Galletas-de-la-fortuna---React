import randomPhrase from "../../utils/randomPhrase";
import phrases from "../../utils/phrases.json"

const Btn = ( { setphraseRandom, setnumberImg } ) => {
  
  const handleChagePhrase = () => {
    setphraseRandom(randomPhrase(phrases))
    setnumberImg(randomPhrase([1, 2, 3, 4]))
  }
  return (
    <div>
      <button className="btn_style" onClick={handleChagePhrase}>VER OTRO</button>
    </div>
  );
}

export default Btn;
