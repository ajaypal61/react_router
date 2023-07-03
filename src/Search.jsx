import React, { useState } from 'react'
import Header from './Header';
import Sresult from './Sresult';
import "./index.css"


const Search = () => {
    const [img, setImg] = useState("");

    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
    }
    return (
        <>
            <Header />
            <input type='text' placeholder='Search AnyThing'
                value={img}
                onChange={inputEvent}
            />
            <hr />
            <Sresult name={img} />
        </>
    )
}

export default Search;
