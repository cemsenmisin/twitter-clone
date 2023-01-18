import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './App.css';

function App() {
  return (
    // BEM
    <div className="App">      
      {/* Sidebar */}
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
