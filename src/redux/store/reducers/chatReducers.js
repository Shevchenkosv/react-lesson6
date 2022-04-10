const initialState = {
    chats: [
        {
            id: 1,
            name: ' Виталий'
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



export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'delete':
            return {
                ...state,
                chats: state.chats.filter((item) => item.id !== action.payload)
            }
        case 'add':
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }
        default:
            return state
    }
}