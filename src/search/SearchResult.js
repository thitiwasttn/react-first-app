import React from "react";

function SearchResult({name , img}) {
    return (
        <div className="Result">
            <img src={img} alt="" width={200}/>
            <strong>{name}</strong>
        </div>
    );
}

export default SearchResult;
