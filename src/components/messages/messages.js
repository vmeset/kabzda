import React from 'react'
import styles from './messages.module.css'
import Dialog from './Dialog/dialog.js'
import Message from './Message/message.js'

let dialogsData = [
	{id: 1, name: 'John'},
	{id: 2, name: 'Francua'},
	{id: 3, name: 'Juan'},
]

let messagesData = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'Salut'},
	{id: 3, message: 'Hola'},
]

let DialogElements = dialogsData.map ( d => ( <Dialog name={d.name} id={d.id} /> ))

let MessageElements = messagesData.map( m => ( <Message message = {m.message} /> ))

const Messages = () => {
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