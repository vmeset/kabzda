import React from 'react'
import styles from './messages.module.css'
import {NavLink} from 'react-router-dom'

const Dialog = (props) => {
	return (
		<div className={styles.dialog}>
			<NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={styles.message}>
			{props.message}
		</div>
	)
}

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

const Messages = () => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogItems}>
				<Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
				<Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
				<Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
			</div>
			<div className={styles.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
				<Message message={messagesData[2].message} />
			</div>

		</div>
	)
}

export default Messages