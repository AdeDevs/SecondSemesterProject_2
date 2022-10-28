import { useReducer } from "react";
import "../Styles/home.css";
import Message from "./Message";
import messagesReducer from "./messageReducer";
import MessageForm from "./MessageForm";
import { ErrorBoundary } from "react-error-boundary";

function HomePage() {
  const [messages, dispatch] = useReducer(messagesReducer , [
    {
      id: 1,
      text: "No matter how hard things get, there's always a chance for things to get better",
      likes: 0,
    },
    {
      id: 2,
      text: "That no one has done it before doesn't mean you can't do it, give it a try",
      likes: 0,
    },
  ]);

  const handleNewMessage = (text) => {
    const message = {
      text,
      id: window.self.crypto.randomUUID(),
      likes: 0,
    };
    dispatch({ type: "added_message", message });
  };

  const handleDelete = (id) => {
    dispatch({ type: "deleted_message", id });
  };

  const handleLike = (id) => {
    dispatch({ type: "liked_message", id });
  };

  const handleDislike = (id) => {
    dispatch({ type: "disliked_message", id });
  };

  function ShowMessage() {
    return <h1 style={{backgroundColor:"white", padding:"30px", color:"red", fontFamily:"Quicksand"}}>Error!!! Something has gone wrong, please reload!!!</h1>
  }
  
  const errorHandler = (error, errorInfo) => {
    console.log('Logging', error, errorInfo)
  }

  return (
    <ErrorBoundary  FallbackComponent={ShowMessage} onError={errorHandler}>
    <div className="home">
      <h1>Messages</h1>

      <MessageForm onAddNewMessage={handleNewMessage} />

      {messages.map((message) => (
        <Message
          onDelete={handleDelete}
          key={message.id}
          onLike={handleLike}
          onDislike={handleDislike}
          {...message}
        />
      ))}
    </div>
    </ErrorBoundary>
  );
}

export { HomePage };
