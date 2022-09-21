import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [string, setString] = useState("");
  const [answer, setAnswer] = useState("");

  function checkVowels(string) {
    if (string.length === 0) {
      setAnswer("Please enter a word to check how many vowels");
      return;
    }
    let vowels = ["a", "e", "i", "o", "u"];
    let tempAnswer = 0;
    let newString = string.toLowerCase();
    newString = newString.replace(/\s+/g, "");
    setAnswer("There are no vowels");
    for (let i = 0; i < newString.length; i++) {
      if (vowels.includes(newString[i])) {
        tempAnswer++;
        if (tempAnswer === 1) {
          setAnswer("There is " + tempAnswer + " vowel");
        } else setAnswer("There are " + tempAnswer + " vowels");
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkVowels(string);
  };

  return (
    <div className="App">
      <h1>Vowel Counter</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          value={string}
          onChange={(e) => setString(e.target.value)}
        ></input>
        <button className="bttn">Check</button>
      </form>
      <div className="answer">{answer}</div>
    </div>
  );
}

export default App;
