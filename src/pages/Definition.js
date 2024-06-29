import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Definition() {

    const [word, setWord] = useState();
    let { search } = useParams();

    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then((response) => response.json())
        .then((data) => {
            setWord(data[0].meanings);
        });
    }, []);
    return (
        <>
            <h1>This is definition:</h1>
            {word ? word.map((meaning, index) => (
                <p key={index}>{meaning.definitions[0].definition}</p>
            )) : <p>loading ...</p>}
        </>
    );
}