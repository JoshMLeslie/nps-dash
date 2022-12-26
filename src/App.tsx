import React from 'react';
import './App.scss';
import AppHeader from './components/Header';
import AppBody from './components/Body';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
    </div>
  );
}

export default App;
