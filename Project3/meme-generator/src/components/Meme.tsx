import "../styles.css";

import { useEffect, useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState({});
  const randomIndex = Math.floor(Math.random() * 101);

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await fetch("https://api.imgflip.com/get_memes");
      const data = await fetchedData.json();
      setAllMemeImages(data.data.memes);
    }

    fetchData();

    return () => {};
  }, []);

  function getMemeImage(e: React.MouseEvent) {
    e.preventDefault();
    const { url } = allMemeImages[randomIndex];
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
