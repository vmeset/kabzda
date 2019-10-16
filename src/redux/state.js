import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"


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

        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogPage, action)

        this._callSubscriber(this._state)

    }
}

export default store