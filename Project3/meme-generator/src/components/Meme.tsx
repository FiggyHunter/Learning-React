import "../styles.css";
import memesData from "../memesData.ts";
import { ChangeEventHandler, useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({ topText: "", bottomText: "", image: "" });
  const [allMemeImages] = useState(memesData);
  const randomIndex = Math.floor(Math.random() * 101);

  function getMemeImage(e: React.MouseEvent) {
    e.preventDefault();
    const { url } = allMemeImages.data.memes[randomIndex];
    setMeme((pastMeme) => {
      return {
        ...pastMeme,
        image: url,
      };
    });
  }

  const changeTopText = (e: ChangeEventHandler) => {
    setMeme((pastMeme) => {
      return {
        ...pastMeme,
        topText: e.target.value,
      };
    });
  };

  const changeBottomText = (e: ChangeEventHandler) => {
    setMeme((pastMeme) => {
      return {
        ...pastMeme,
        bottomText: e.target.value,
      };
    });
  };

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
        <div className="top-text">{meme.topText}</div>
        <img className="meme-image" src={meme.image} alt="" />{" "}
        <div className="bottom-text">{meme.bottomText}</div>
      </section>
    </main>
  );
}
