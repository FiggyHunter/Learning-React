export default function Joke({ setup, punchline, upvotes }) {
  return (
    <section className="joke">
      {setup && <h1>{setup} </h1>}
      <p>{punchline}</p>
      <h5>{upvotes}</h5>
    </section>
  );
}
