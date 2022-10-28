import "../Styles/home.css";

import { useState } from "react";

function MessageForm({ onAddNewMessage }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNewMessage(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Add A Message</label>
      <input
        type="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Your Message</button>
    </form>
  );
}

export default MessageForm;
