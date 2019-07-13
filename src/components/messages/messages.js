import React from 'react'
import styles from './messages.module.css'
import Dialog from './Dialog/dialog.js'
import Message from './Message/message.js'

const Messages = (props) => {

	let DialogElements = props.dialogz.map ( d => ( <Dialog name={d.name} id={d.id} /> ))

	let MessageElements = props.messagez.map( m => ( <Message message = {m.message} /> ))

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogItems}>
				{DialogElements}
			</div>
			<div className={styles.messages}>
				{MessageElements}
			</div>

		</div>
	)
}

export default Messages