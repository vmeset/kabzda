import React from 'react'
import styles from './profile.module.css'
import MyPosts from './myPosts/myPosts.js'
import ProfileInfo from './profileInfo.js'

const Profile = (props) => {
	return (
			<div className={styles.profile}>
				<ProfileInfo />
				<MyPosts posts={props.profilePage.allPosts}
						 newPostText={props.profilePage.newPostText}
						 addPost={props.addPost}
						 updatePost={props.updatePost}
				/>
			</div>
		)
}

export default Profile;