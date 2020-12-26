import React from "react";

function SearchResult({name}) {
    {
        console.log('MyRsult {} ' ,name);
    }
    return (
        <div className="Result">
            <div className="Result__name">
                <strong>
                    {name}
                </strong>
            </div>
        </div>
    );
}

export default SearchResult;
