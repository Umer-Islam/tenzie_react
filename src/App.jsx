import Die from "./components/Die";

function App() {
  return (
    <>
      <main className="container">
        <div className="game">
          <Die value={1} />

          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
      </main>
    </>
  );
}

export default App;
