import './App.css';
import React, { useState } from 'react';
import HeadlineList from './Components/HeadlineList';
// import HeadlineData from './HeadlineData.json';
// import Headline from './Headline';
import { getGuardianArticles } from './GuardianAPI';

function App() {
  // const { headlines } = HeadlineData;
  const [articles, setArticles] = useState([getGuardianArticles()]);
  // const [error, setError] = useState([]);
  // console.log({ articles });
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            <HeadlineList headlines={articles} />
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
    </>
  );
}

export default App;
