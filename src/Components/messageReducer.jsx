function messagesReducer(messages, action) {
    switch (action.type) {
      case 'added_message':
       return [action.message, ...messages]
      case 'deleted_message':
        return messages.filter(message => message.id !== action.id)
      case 'liked_message':
        return messages.map(message => {
          if (message.id === action.id) {
            return {...message, likes: message.likes + 1}
          } else {
            return message
          }
        })
      case 'disliked_message':
        return messages.map(message => {
          if (message.id === action.id) {
            return {...message, likes: message.likes - 1}
          } else {
            return message
          }
        }); default: ; 
    }; 
  }

  export default messagesReducer;