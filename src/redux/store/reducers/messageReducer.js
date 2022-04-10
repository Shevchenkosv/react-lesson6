const initialState = {
    chats: [
        {
            id: 1,
            name: 'виталий'
        },
        {
            id: 2,
            name: 'Aндрей'
        },
        {
            id: 3,
            name: 'Михаил'
        }
    ],

    messages: [
        {
            chatId: 2,
            text: 'Всем Привет!'
        },
        {
            chatId: 3,
            text: 'Всем Привет!'
        },
        {
            chatId: 1,
            text: 'Всем Привет!'
        }
    ]
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}