import React from 'react'
import styles from './navigator.module.css'

const Navigator = () => {
	return (
		<nav className={styles.navigator}>
		<div className={styles.item}>
			<a href='/profile'>Profile</a>
		</div>
		<div className={`${styles.item} ${styles.active}`}>
			<a href='/messages'>Messages</a>
		</div>
		<div>
			Settings
		</div>
		</nav>
		)
}

export default Navigator;