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
            ]
        },
        profilePage: {
            allPosts: [
                {message: 'yo', likes: '1'},
                {message: 'wtf', likes: '5'},
                {message: 'omg', likes: '20'}
            ],
            newPostText: 'wtf?!'
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('bzzz')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        }
        this._state.profilePage.allPosts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    updateTextPost(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscriber(observer) {
        this._callSubscriber = observer
    }
}

export default store