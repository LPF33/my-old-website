export default function (state = {}, action) {

    if(action.type === "receivedMessage"){

        const allMessages = state.allMessages ? [...state.allMessages, {firstname: action.message.firstname, lastname: action.message.lastname, messagedraft: action.message.messagedraft}] : [{firstname: action.message.firstname,lastname: action.message.lastname,messagedraft: action.message.messagedraft}];
        
        state = {
            ...state,
            allMessages
        };
    }

    return state;
}