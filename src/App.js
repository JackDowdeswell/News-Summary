import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import HeadlineList from './Components/HeadlineList.jsx';
import { getGuardianArticles } from './GuardianAPI';

function App() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    getGuardianArticles().then(news => {
      // setArticles(JSON.stringify(news, null, 2));
      setHeadlines(news.response.results)
      console.log(news.response.results)
    });
  }, [])

  return (
    <>
      <body>
        <Header />
        <div className="App">
          <HeadlineList headlines={headlines} />
        </div>
      </body>
    </>
  );
}

export default App;
