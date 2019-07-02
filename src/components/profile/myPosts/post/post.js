import React from 'react'
import styles from './post.module.css'

const Post = (props) => {
	return (
		<div className={styles.avatar}>
			<img src="https://i.pinimg.com/originals/0a/42/7f/0a427f8c57082a1d1f0da6538acabf32.jpg" />
			<div>
				{props.message}
			</div>
			<span>
				{props.likes}
			</span>
		</div>
		)
}

export default Post;