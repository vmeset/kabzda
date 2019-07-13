import React from 'react'
import styles from './App.module.css'
import Head from "./components/header/header.js"
import Navigator from "./components/navigator/navigator.js"
import Profile from "./components/profile/profile.js"
import Messages from "./components/messages/messages.js"
import {BrowserRouter, Route} from 'react-router-dom'


function App(props) {

	return (
  	<BrowserRouter>
	    <div className={styles.wrapper}>
	      <Head />
	      <Navigator />
	      <div className={styles.content}>
			<Route path='/profile' render = { () => <Profile allPosts={props.allPosts}/> } />
			<Route path='/messages' render = { () => <Messages dialogz={props.dialogz} messagez={props.messagez} />} />
	      </div>
	    </div>
	</BrowserRouter>
  );
}

export default App