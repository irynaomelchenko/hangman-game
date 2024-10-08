import style from './HangmanDrawing.module.css';

const HEAD = (<div className={style.head} key='head' />);
const BODY = (<div className={style.body} key='body' />);
const RIGHT_ARM = (<div className={style['right-arm']} key='right-arm'/>);
const LEFT_ARM = (<div className={style['left-arm']} key='left-arm' />);
const RIGHT_LEG = (<div className={style['right-leg']} key='right-leg' />);
const LEFT_LEG = (<div className={style['left-leg']} key='left-leg' />);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return <div style={{ position: "relative", width: 'fit-content' }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className={style["part-1"]} />
        <div className={style["part-2"]} />
        <div className={style["part-3"]} />
        <div className={style["part-4"]} />
    </div>    
}