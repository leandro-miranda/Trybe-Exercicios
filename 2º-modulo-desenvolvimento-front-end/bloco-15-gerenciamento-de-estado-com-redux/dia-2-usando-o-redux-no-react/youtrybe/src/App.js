import React from 'react';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Player />
      </main>
    </>
  );
}

export default App;
