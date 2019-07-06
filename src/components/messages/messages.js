import React from 'react'
import styles from './messages.module.css'

const Messages = () => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogItems}>
				<div className={styles.dialog}>
					John
				</div>
				<div className={styles.dialog}>
					Pierre
				</div>
				<div className={styles.dialog}>
					Jorhe
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