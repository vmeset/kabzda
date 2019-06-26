import React from 'react'
import styles from './navigator.module.css'

const Navigator = () => {
	return (
		<nav className={styles.navigator}>
			<div className={styles.item}>
				Profile
			</div>
			<div className={`${styles.item} ${styles.active}`}>
				Messages
			</div>
			<div>
				Settings
			</div>
		</nav>
	)
}

export default Navigator;