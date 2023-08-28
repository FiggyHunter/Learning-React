import "../styles.css";
import memesData from "../memesData.ts";
import { ChangeEventHandler, useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg",
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  };

  return (
    <main>
      <form>
        <div className="inputs">
          <input
            name="topText"
            onChange={handleChange}
            placeholder="Top Text"
            type="text"
          />
          <input
            name="bottomText"
            onChange={handleChange}
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
