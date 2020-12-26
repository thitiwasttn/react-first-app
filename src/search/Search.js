import React, {useState} from "react";
import Axios from 'axios'
import SearchResult from "./SearchResult";

let API_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';
let API_KEY = 'ae5c359f5f1c8100305cb09b8a80790b';
let IMAGE_URL = 'https://image.tmdb.org/t/p/w500'


function Search() {

    const [name, setName] = useState([]);
    let inputStyle = {
        fontSize: 24,
        display: 'block',
        width: '100%',
        paddingLeft: 8,
    };

    function onChange(event) {
        search(event.target.value);
    }

    function search(keyword) {
        if (keyword.length > 2) {
            Axios.get(API_URL_SEARCH, {
                params: {
                    api_key: API_KEY,
                    query: keyword
                }
            }).then(result => {
                //console.log('result.data {} ', JSON.stringify(result.data));
                populateDate(JSON.stringify(result.data));
            });
        }
    }

    function populateDate(jsonData) {
        // console.log()
        let data = JSON.parse(jsonData);
        let names = data.results;

        let post = []
        for (let item of names) {
            const test = {};
            test.nname = item.original_title;
            test.image = IMAGE_URL + item.poster_path;
            post.push(test);
        }
        setName(post);
    }

    return (
        <div className="Search">
            <input type="text"
                   style={inputStyle}
                   placeholder="move key word"
                   onChange={onChange}/>
            {
                name.map((x) => {
                    return <SearchResult name={x.nname} img={x.image}/>;
                })
            }
        </div>
    );
}

export default Search;