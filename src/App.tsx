import Particles from "@tsparticles/react";
import { confetti, ConfettiFirstParam } from "@tsparticles/confetti";
import { useCallback, useEffect, useState, useMemo } from "react";
import words from './wordList.json';
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const options: ConfettiFirstParam = useMemo(
    () => ({
        spread: 1000,
        particleCount: 500,
        position: {
          x: 50,
          y: 0,
        }
      }),
    [],
  );

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser]);

  useEffect(() => {
    if (isWinner) confetti(options)
  }, [isWinner]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if(!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if(key !== 'Enter') return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [])

  return (
    <>
      {(<Particles
        id="tsparticles"
        options={options}
      />)}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem"
      }}>
        <div style={{
          fontSize: "2rem",
        }}>
          {!isWinner && !isLoser && 'Guess the word'}
          {isWinner && 'Winner! Refresh or press Enter to try again'}
          {isLoser && 'Nice try. Refresh or press Enter to try again'}
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '6rem',
          width: '100%'
        }}>
          <div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
            <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
          </div>
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </>
  )
}

export default App
