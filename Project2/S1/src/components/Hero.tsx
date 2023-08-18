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
        {data.map((data) => (
          <Card
            key={data.title}
            title={data.title}
            rating={data.stats.rating}
            img={data.coverImg}
            location={data.location}
            price={data.price}
            reviewCount={data.stats.reviewCount}
          />
        ))}
      </div>
    </>
  );
}
