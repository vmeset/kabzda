import React from 'react'
import styles from './navigator.module.css'
import {NavLink} from 'react-router-dom'

const Navigator = () => {
	return (
		<nav className={styles.navigator}>
		<div className={styles.item}>
			<NavLink to='/profile'>Profile</NavLink>
		</div>
		<div className={`${styles.item} ${styles.active}`}>
			<NavLink to='/messages'>Messages</NavLink>
		</div>
		<div>
			Settings
		</div>
		</nav>
		)
}

export default Navigator;