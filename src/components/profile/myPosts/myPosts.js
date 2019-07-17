import React from 'react'
import Post from './post/post.js'


const MyPosts = (props) => {

	let postsElements = props.posts.map((element) => <Post message={element.message} likes={element.likes} />)

	return (
		<div>
			{postsElements}
		</div>
		)
	}

export default MyPosts;