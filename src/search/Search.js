import React from "react";

function Search() {
    function onChange(event) {
        search(event.target.value);
    }

    function search(keyword) {
        console.log('value {} ', keyword);
    }

    return (
        <div className="Search">
            <input type="text" style={{
                fontSize: 24,
                display: 'block',
                width: '100%',
                paddingLeft: 8,
            }} placeholder="move key word"
                   onChange={onChange}/>
        </div>
    );
}

export default Search;