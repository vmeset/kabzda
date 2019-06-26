import React from 'react'
import styles from './navigator.module.css'

const Navigator = () => {
	return (
		<nav className={styles.navigator}>
			<div>
				Profile
			</div>
			<div>
				Messages
			</div>
			<div>
				Settings
			</div>
		</nav>
	)
}

export default Navigator;