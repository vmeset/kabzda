import React from 'react';
import './App.css';
import Head from "./components/header.js";

function App() {
  return (
    <div className="wrapper">
      <Head />
      <nav className="navigator">
       <div>
        Profile
       </div>
       <div>
        Messages
       </div>
       <div>
        Settings
       </div>
      </nav>
      <div className="content">
        <div>
          <img src="http://www.vitalsigns.graphics/wp-content/uploads/2018/09/badboy_lg-e1447284886415-600x328.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default App;
