import './App.css';
import Main from './Main/index.tsx';
import Header from './components/Header/index.tsx';
import React from 'react';
import { useScroll } from "ahooks"


function App() {
  const scroll = useScroll(document)

  return (
    <>
      <div className={`App`}>
        <Header className={`${scroll && scroll.top >= 200 ? 'header--sticky': ''}`}></Header>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
