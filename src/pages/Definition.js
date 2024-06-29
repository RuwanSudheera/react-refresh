import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NotFound from "../components/NotFound";

export default function Definition() {

    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false);
    let { search } = useParams();
    const navigate = useNavigate;

    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then((response) => {
            if(response.status === 404) {
                setNotFound(true);
            }
            return response.json();
        })
        .then((data) => {
            setWord(data[0]?.meanings);
        });
    }, []);

    if(notFound) {
        return (
            <>
                <NotFound />
                <Link to="/dictionary">Back to search</Link>
            </>
        );
    }
    return (
        <>
            {word ? (
                <>
                    <h1>This is definition:</h1>
                    {word.map((meaning, index) => {
                        return <p key={index}>{meaning.definitions[0].definition}</p>
                    })}
                    
                </>
            ) : null}
        </>
    );
}