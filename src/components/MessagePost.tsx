import React, { useState } from 'react';

interface MessagePostProps {
  onSendMessage: (message: string, author: string) => void;
}

const MessagePost: React.FC<MessagePostProps> = ({onSendMessage}) => {
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(message, author);
    setMessage('');
  }
  return (
    <form onSubmit={handleSendMessage}>
      <input type="text"
             value={author}
             onChange={(e) => setAuthor(e.target.value)}
             required
             placeholder="Name"/>
      <input type="text"
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             required
             placeholder="Message"/>
      <button type="submit">Send</button>
    </form>
  );
};

export default MessagePost;