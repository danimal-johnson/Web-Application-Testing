import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  const [stats, updateStats] = React.useState ({
    hits: 0,
    strikes: 0,
    balls: 0,
    fouls: 0,
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Ultimate Baseball Stat Counter</h1>
        </header>
      <Display stats={stats} />
      <Dashboard stats={stats} update={updateStats} />        
    </div>
  );
}

export default App;
