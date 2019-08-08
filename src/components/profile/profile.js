import React from 'react'
import styles from './profile.module.css'
import MyPosts from './myPosts/myPosts.js'
import ProfileInfo from './profileInfo.js'
import {addPosts} from "../../state";

const Profile = (props) => {
	return (
			<div className={styles.profile}>
				<ProfileInfo />
				<MyPosts posts={props.profileState.allPosts} addPost={props.addPost} />
			</div>
		)
}


export default Profile;