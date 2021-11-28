import './App.css';
import React, { useState } from 'react';
import HeadlineList from './Components/HeadlineList';
import HeadlineData from './HeadlineData.json';
import { getGuardianArticles } from './GuardianAPI';

function App() {
  getGuardianArticles();
  const { headlines } = HeadlineData;
  // const [headlines, setHeadlines] = useState([{ headlines }])
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            <HeadlineList headlines={headlines} />
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
