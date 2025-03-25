import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(() => getAllRandom());

  function getAllRandom() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      // value: 5,
      isHeld: false,
      id: nanoid(),
    }));
  }
  let gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);
  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld
            ? { ...die }
            : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setDice(getAllRandom());
    }
  }

  function hold(id) {
    console.log(id);
    setDice((old) =>
      old.map((die) => (id === die.id ? { ...die, isHeld: !die.isHeld } : die))
    );
  }
  let elements = dice.map((element) => (
    <Die
      value={element.value}
      key={element.id}
      id={element.id}
      isHeld={element.isHeld}
      hold={hold}
    />
  ));
  return (
    <>
      {gameWon ? <Confetti gravity={0.07} /> : null}
      <main className="container">
        <div className="game">{elements}</div>
        <button className="roll-dice" onClick={rollDice}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  );
}

export default App;
