import Card from "./Card";
import Photogrid from "./Photogrid";
import data from "../data.ts";

export default function Hero() {
  return (
    <>
      <main className="hero">
        <Photogrid />
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </main>
      <div className="cards-container">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
