import { useState } from "react";
import Button from "../Button";

const Demo = () => {
    const [name, setName] = useState('quan');

    const handleChangename = () => {
        setName('thanh quan');
    };

    const handleChangename2 = () => {
        setName('quan quang');
    };

    return(
        <>
            <h2>Name: {name}</h2>
        <Button onClick={handleChangename}>Change name</Button>
        <button onClick={handleChangename2}>Change name</button>
        </>
    );
}

export default Demo