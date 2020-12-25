import logo from './logo.svg';
import './App.css';
import imageTest from './assets/logo512.png'

function App() {
    let title = 'thitiwasn';
    let imgTest = imageTest;
    return (
        <div className="App">
            <header className="App-header">
                <h1>{title}</h1>
                <img src={imgTest} alt="test"/>
            </header>
        </div>
    );
}

export default App;
