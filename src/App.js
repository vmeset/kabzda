import React from 'react';
import './App.css';
import Head from "./components/header.js";
import Navigator from "./components/navigator.js";

function App() {
  return (
    <div className="wrapper">
      <Head />
      <Navigator />

      <div className="content">
        <div>
          <img src="http://www.vitalsigns.graphics/wp-content/uploads/2018/09/badboy_lg-e1447284886415-600x328.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default App;
