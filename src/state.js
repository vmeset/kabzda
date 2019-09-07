const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST = 'UPDATE_NEW_POST'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
    _state: {

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
            ],
            newMessageText: ''
        },
        profilePage: {
            allPosts: [
                {message: 'yo', likes: '1'},
                {message: 'wtf', likes: '5'},
                {message: 'omg', likes: '20'}
            ],
            newMessageBody: 'wtf?!'
        }
    },
    _callSubscriber() {},

    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.allPosts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY ) {
            this._state.dialogPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageBody
            this._state.dialogPage.newMessageBody=''
            this._state.dialogPage.messagez.push({id: 8, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})
export const updateMessageCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export default store