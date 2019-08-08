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
			<Route path='/profile' render = { () => <Profile profileState={props.appState.profilePage} addPost={props.addPost}/> } />
			<Route path='/messages' render = { () => <Messages dialogState={props.appState.dialogPage} />} />
	      </div>
	    </div>
	</BrowserRouter>
  );
}

export default App