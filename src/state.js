import React from 'react'

let state = {

    dialogPage: {
        dialogz: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Francua'},
            {id: 3, name: 'Juan'},
        ],
        messagez: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Salut'},
            {id: 3, message: 'Hola'},
        ]
    },
    profilePage: {
        allPosts: [
            {message: 'yo', likes: '1'},
            {message: 'wtf', likes: '5'},
            {message: 'omg', likes: '20'}
        ]
    }
}

export let addPost = () => {

    let newPost = {

        id: 5,
        message: 1,
        likes: 0

    }

    state.profilePage.allPosts.push(newPost)
}


export default state