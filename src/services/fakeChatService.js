
const chats = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        publishDate: "2018-01-03T19:04:28.809Z",
        host: {
            initiated: true,
            content: "Welcome to the chat"
        },
        guest: {
            initiated: false,
            content: ""
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        publishDate: "2018-01-03T19:04:28.809Z",
        host: {
            initiated: true,
            content: "What would you like help with today?"
        },
        guest: {
            initiated: false,
            content: ""
        }
    }
];

export function getChats() {
    return chats;
}


export function deleteChat(id) {
    let chatInDb = chats.find(m => m._id === id);
    chats.splice(chats.indexOf(chatInDb), 1);
    return chatInDb;
}
