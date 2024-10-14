import React from 'react';
import { Massage } from '../types';

interface ViewMessageProps {
  messages: Massage[];
}

const ViewMessages: React.FC<ViewMessageProps> = ({messages}) => {
  return (
    <div>
      {messages.map((msg) => (
        <div key={msg._id}>
          <p><strong>{msg.author}</strong>: {msg.message}</p>
          <p><small>{new Date(msg.datetime).toLocaleString()}</small></p>
        </div>
      ))}
    </div>
  );
};

export default ViewMessages;