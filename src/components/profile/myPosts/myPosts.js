import React from 'react'
import Post from './post/post.js'

const MyPosts = () => {
	return (
		<div>
			<Post message='yo!' likes='1' />
			<Post message='wtf!' likes='5' />
			<Post message='omg!' likes='20' />
		</div>
		)
	}

export default MyPosts;