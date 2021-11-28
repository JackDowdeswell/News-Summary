import './App.css';
import React, { useState } from 'react';
import HeadlineList from './HeadlineList';

function App() {
  const [headlines, setHeadlines] = useState([{ title: 'Headline 1', image: 'image placeholder1' }, { title: 'Headline 2', image: 'image placeholder2' }, { title: 'Headline 3', image: 'image placeholder3' }])
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
