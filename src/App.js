import React from 'react'
import styles from './App.module.css'
import Head from "./components/header/header.js"
import Navigator from "./components/navigator/navigator.js"
import Profile from "./components/profile/profile.js"
import Messages from "./components/messages/messages.js"

function App() {
  return (
    <div className={styles.wrapper}>
      <Head />
      <Navigator />
      <div className={styles.content}>

		<Messages />
      </div>
    </div>
  );
}

export default App