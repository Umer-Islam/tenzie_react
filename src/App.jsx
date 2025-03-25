import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
function App() {
  const [dice, setDice] = useState(() => getAllRandom());

  function getAllRandom() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  console.log(dice);
  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => ({ ...die, value: Math.ceil(Math.random() * 6) }))
    );
  }
  let elements = dice.map((element) => (
    <Die value={element.value} key={element.id} isHeld={element.isHeld} />
  ));
  return (
    <>
      <main className="container">
        <div className="game">
          {elements}

          <button onClick={rollDice}>roll</button>
        </div>
      </main>
    </>
  );
}

export default App;
