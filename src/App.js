import React from 'react';
import './App.css';
import Head from "./components/header.js";
import Navigator from "./components/navigator.js";
import Profile from "./components/profile/profile.js"

function App() {
  return (
    <div className="wrapper">
      <Head />
      <Navigator />
      <Profile />
    </div>
  );
}

export default App;
