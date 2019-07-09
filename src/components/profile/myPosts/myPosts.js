import React from 'react'
import Post from './post/post.js'

let allPosts = [
	{message: 'yo', likes: '1'},
	{message: 'wtf', likes: '5'},
	{message: 'omg', likes: '20'}
]

let postsElements = allPosts.map((element) => <Post message={element.message} likes={element.likes} />)


const MyPosts = () => {
	return (
		<div>
			{postsElements}
		</div>
		)
	}

export default MyPosts;