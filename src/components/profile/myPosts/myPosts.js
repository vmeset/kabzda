import React from 'react'
import Post from './post/post.js'


const MyPosts = (props) => {

	let postsElements = props.posts.map((element) => <Post message={element.message} likes={element.likes} />)

	let addPost = () => {
		let text = inputText.current.value
	}

	let inputText = React.createRef()

	return (
		<div>
			<div>
				<textarea ref={inputText}>

				</textarea>
			</div>
			<div>
				<button onClick={addPost}>Add</button>
			</div>

			{postsElements}
		</div>
		)
	}

export default MyPosts;