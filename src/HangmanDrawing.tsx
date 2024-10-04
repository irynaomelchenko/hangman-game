const HEAD = (
    <div style={{
            width: "50px",
            height: "50px",
            border: "10px solid black",
            borderRadius: "100%",
            position: "absolute",
            top: "50px",
            right: "-30px"
        }}
        key='head'
    />
)

const BODY = (
    <div style={{
            width: "10px",
            height: "100px",
            backgroundColor: "black",
            position: "absolute",
            top: "119px",
            right: 0
        }}
        key='body'
    />
)

const RIGHT_ARM = (
    <div style={{
            width: "100px",
            height: "10px",
            backgroundColor: "black",
            position: "absolute",
            top: "150px",
            right: "-100px",
            rotate: "-30deg",
            transformOrigin: "left bottom"
        }}
        key='right-arm'
    />
)

const LEFT_ARM = (
    <div style={{
            width: "100px",
            height: "10px",
            backgroundColor: "black",
            position: "absolute",
            top: "150px",
            right: "10px",
            rotate: "30deg",
            transformOrigin: "right bottom"
        }}
        key='left-arm'
    />
)

const RIGHT_LEG = (
    <div style={{
            width: "100px",
            height: "10px",
            backgroundColor: "black",
            position: "absolute",
            top: "214px",
            right: "-100px",
            rotate: "60deg",
            transformOrigin: "left top"
        }}
        key='right-leg'
    />
)

const LEFT_LEG = (
    <div style={{
            width: "100px",
            height: "10px",
            backgroundColor: "black",
            position: "absolute",
            top: "210px",
            right: "10px",
            rotate: "-60deg",
            transformOrigin: "right top"
        }}
        key='left-leg'
    />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return <div style={{ position: "relative", width: 'fit-content', marginBottom: '2rem' }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{ height: "50px", width: "10px", backgroundColor: "black", position: "absolute", top: 0, right: 0 }} />
        <div style={{ height: "10px", width: "200px", backgroundColor: "black", marginLeft: "120px" }} />
        <div style={{ height: "400px", width: "10px", backgroundColor: "black", marginLeft: "120px" }} />
        <div style={{ height: "10px", width: "250px", backgroundColor: "black" }} />
    </div>    
}