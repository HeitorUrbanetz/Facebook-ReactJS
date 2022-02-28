import React from 'react';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Suggestion from './components/Suggestion';




function App() {
  return (
    <div className='app'>
  
      <Header />
    
      <div className='side'>
        <Sidebar/>
        <Feed/>
        <Suggestion/>
          
       
      </div>
    </div>
  )
}

export default App;
