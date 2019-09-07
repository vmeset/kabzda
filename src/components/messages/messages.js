import React from 'react'
import styles from './messages.module.css'
import Dialog from './Dialog/dialog.js'
import Message from './Message/message.js'
import {sendMessageCreator, updateMessageCreator} from "../../state";

const Messages = (props) => {

	let state = props.store.getState().dialogPage

	let DialogElements = state.dialogz.map ( d => ( <Dialog name={d.name} id={d.id} /> ))
	let MessageElements = state.messagez.map( m => ( <Message message = {m.message} /> ))
	let newMessageBody = state.newMessageBody

	let onChangeMessageText = (event) => {
		let body = event.target.value
		props.store.dispatch(updateMessageCreator(body))
	}

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator())
	}

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogItems}>
				{DialogElements}
			</div>
			<div className={styles.messages}>
				<div>
					{MessageElements}
				</div>
				<div>
					<div>
						<textarea placeholder={'Enter your message'} value={newMessageBody} onChange={onChangeMessageText}>

						</textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>
							SEND
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Messages