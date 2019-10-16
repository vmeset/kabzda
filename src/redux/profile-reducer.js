const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST = 'UPDATE_NEW_POST'

const profileReducer = (state, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            state.allPosts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})

export default profileReducer