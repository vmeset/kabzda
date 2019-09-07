import React from 'react'
import styles from './App.module.css'
import Head from "./components/header/header.js"
import Navigator from "./components/navigator/navigator.js"
import Profile from "./components/profile/profile.js"
import Messages from "./components/messages/messages.js"
import {Route} from 'react-router-dom'

function App(props) {

	return (
	    <div className={styles.wrapper}>
	      <Head />
	      <Navigator />
	      <div className={styles.content}>
			<Route path='/profile' render = { () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} /> } />
			<Route path='/messages' render = { () => <Messages store={props.store} />} />
	      </div>
	    </div>
  );
}

export default App