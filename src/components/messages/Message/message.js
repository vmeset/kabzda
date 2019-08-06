import React from 'react'
import styles from './../messages.module.css'

const Message = (props) => {

	let textareaRef = React.createRef()

	let newMessage = (props) => {

		let Text = textareaRef.current.value

	}

	return (
		<div className={styles.message}>
			<div>
				{props.message}
				<textarea ref={textareaRef}></textarea>
				<button onClick={newMessage}>Send</button>
			</div>
		</div>
	)
}

export default Message