import React from 'react'
import styles from './messages.module.css'
import {NavLink} from 'react-router-dom'

const Messages = () => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogItems}>
				<div className={styles.dialog}>
					<NavLink to="/messages/1">John</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/messages/2">Pierre</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/messages/3">Jorhe</NavLink>
				</div>
			</div>
			<div className={styles.messages}>
				<div className={styles.message}>
					hi
				</div>
				<div className={styles.message}>
					salut
				</div>
				<div className={styles.message}>
					hola
				</div>
			</div>

		</div>
	)
}

export default Messages