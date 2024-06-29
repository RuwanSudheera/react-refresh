import { useEffect, useState } from "react";

export default function Dictionary(params) {
    const [word, setWord] = useState('');
    useEffect(() => {
        console.log('ddd', word)
    }, [word])
    return(
        <>
            <input type="text" onChange={(e) => {setWord(e.target.value)}}/>
            <h5>answer is {word}</h5>
        </>
    )
}