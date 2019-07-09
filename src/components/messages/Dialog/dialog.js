import React from 'react'
import styles from './../messages.module.css'
import {NavLink} from 'react-router-dom'

const Dialog = (props) => {
	return (
		<div className={styles.dialog}>
			<NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
		</div>
	)
}

export default Dialog