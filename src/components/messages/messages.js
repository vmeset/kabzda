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


const Messages = () => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogItems}>
				<Dialog name="John" id="1" />
				<Dialog name="Francua" id="2" />
				<Dialog name="Juan" id="3" />
			</div>
			<div className={styles.messages}>
				<Message message='hi' />
				<Message message='salut' />
				<Message message='hola' />
			</div>

		</div>
	)
}

export default Messages