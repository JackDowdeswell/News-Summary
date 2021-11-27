import './App.css';
import Headlines from './Headlines';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://github.com/digital-futures-academy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Futures Academy
          </a>
        </header>
      </div>

      <Headlines />
    </>
  );
}

export default App;
