import "../styles.css";
import memesData from "../memesData.ts";
import { ChangeEventHandler, useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");
  const [topText, updateTopText] = useState("");
  const [bottomText, updateBottomText] = useState("");

  function getMemeImage(e: React.MouseEvent) {
    e.preventDefault();
    const { url } = memesData.data.memes[randomIndex];
    setMemeImage(url);
  }

  const changeTopText = (e: ChangeEventHandler) => {
    updateTopText(e.target.value);
  };

  const changeBottomText = (e: ChangeEventHandler) => {
    updateBottomText(e.target.value);
  };

  const randomIndex = Math.floor(Math.random() * 101);

  return (
    <main>
      <form>
        <div className="inputs">
          <input onChange={changeTopText} placeholder="Top Text" type="text" />
          <input
            onChange={changeBottomText}
            placeholder="Bottom Text"
            type="text"
          />
        </div>
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </form>

      <section className="image">
        <div className="top-text">{topText}</div>
        <img className="meme-image" src={memeImage} alt="" />{" "}
        <div className="bottom-text">{bottomText}</div>
      </section>
    </main>
  );
}
