import { createRoot } from "react-dom/client";
import Joke from "./components/Joke";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Joke
      setup="Why don't scientists trust atoms?"
      punchline="Because they make up everything!"
      upvotes={20}
    />
    <Joke
      setup="Did you hear about the mathematician who's afraid of negative numbers?"
      punchline="He'll stop at nothing to avoid them."
    />
    <Joke
      setup="Parallel lines have so much in common."
      punchline="It's a shame they'll never meet."
    />{" "}
    <Joke
      setup=""
      punchline="It’s hard to explain puns to kleptomaniacs because 
they always take things literally."
    />
  </>
);
