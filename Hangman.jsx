import React, { useState } from 'react';

export default function Hangman({duration = 120000}) {
    const word = "Hangmang".toUpperCase();
    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [correctGuesses, setCorrectGuesses] = useState([])
    const [wrongGuesses, setWrongGuesses] = useState(0);




    const maskedWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : "_").join(" ");
    return (
        <div>
            <h1>Hangman game</h1>
            <h2>Words completed: 0</h2>
            <h3>Input new word below: </h3>
            <input type="text" />
            <button>Start game</button>
            <h3>Number of wrong guesses: {wrongGuesses}</h3>
            <p>{maskedWord}</p>
            {alphabets.map((alphabet, index) => <button key={index} onClick={() => {
                if (word.includes(alphabet)) {
                    setCorrectGuesses([...correctGuesses, alphabet])
                } else {
                    setWrongGuesses(wrongGuesses+1)
                }
            }}>{alphabet}</button>)}
            {wrongGuesses > 6 ? 
            <p>You lost!</p> : 
            !maskedWord.includes("_") &&  <p>You won!</p>}
        </div>
    );
}