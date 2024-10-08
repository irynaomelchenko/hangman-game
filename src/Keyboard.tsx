import styles from './Keyboard.module.css'

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled?: boolean
}

export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }: KeyboardProps) {
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '.5rem',
        flexWrap: 'wrap',
        maxWidth: '640px'
    }}>
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return <button
                        onClick={() => addGuessedLetter(key)}
                        key={key}
                        disabled={isInactive || disabled}
                        className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`}>{key}
                    </button>
        })}
    </div>
}