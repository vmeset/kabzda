import React from 'react'
import Post from './post/post.js'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

	let postsElements = props.posts.map((element) => <Post message={element.message} likes={element.likes} />)

	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	let inputText = React.createRef()

	let onChangePost = () => {
		debugger
		let text = inputText.current.value
		props.dispatch(updateNewPostActionCreator(text))
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