import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import { useStateValue } from './StateProvider';



function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="App">
      {
        user ? (
          <div>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </div>
        ) : (
            <Login />
          )
      }
    
    </div>
  );
}

export default App;
