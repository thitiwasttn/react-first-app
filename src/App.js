import logo from './logo.svg';
import './App.css';
import imageTest from './assets/logo512.png'
import Search from "./search/Search";

let header = {
    backgroundColor: '#333',
    color: 'white',
    display: 'block'
}
function App() {
    return (
        <div className="App">
            <table className="Navbar">
                <thead>
                <tr>
                    <th><img src={imageTest} alt="logo" width="50"/></th>
                    <th>test</th>
                </tr>
                </thead>
            </table>
            <Search/>
        </div>
    );
}

export default App;
