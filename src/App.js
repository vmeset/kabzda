import React from 'react'
import styles from './App.module.css'
import Head from "./components/header/header.js"
import Navigator from "./components/navigator/navigator.js"
import Profile from "./components/profile/profile.js"
import Messages from "./components/messages/messages.js"
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
  	<BrowserRouter>
	    <div className={styles.wrapper}>
	      <Head />
	      <Navigator />
	      <div className={styles.content}>
			<Route path='/profile' component={Profile} />
			<Route path='/messages' component={Messages} />
	      </div>
	    </div>
	</BrowserRouter>
  );
}

export default App