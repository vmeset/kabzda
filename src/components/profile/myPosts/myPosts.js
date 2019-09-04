import React from 'react'
import Post from './post/post.js'


const MyPosts = (props) => {

	let postsElements = props.posts.map((element) => <Post message={element.message} likes={element.likes} />)

	let addPost = () => {
		props.dispatch({type: 'ADD-POST'})
	}

	let inputText = React.createRef()

	let onChangePost = () => {
		let text = inputText.current.value
		props.dispatch({type: 'UPDATE-NEW-POST', newText: text})
	}

	return (
		<div>
			<div>
				<textarea onChange={onChangePost} ref={inputText} value={props.newPostText} />
			</div>
			<div>
				<button onClick={addPost}>Add</button>
			</div>

			{postsElements}
		</div>
		)
	}

export default MyPosts;