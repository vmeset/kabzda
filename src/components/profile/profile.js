import React from 'react'
import styles from './profile.module.css'
import MyPosts from './myPosts/myPosts.js'

const ProfileInfo = () => {
	return (
		<div>
			<img src="http://www.vitalsigns.graphics/wp-content/uploads/2018/09/badboy_lg-e1447284886415-600x328.jpg"/>
		</div>
	)
}


const Profile = () => {
	return (
			<div className={styles.profile}>
				<ProfileInfo />
				<MyPosts />
			</div>
		)
}


export default Profile;