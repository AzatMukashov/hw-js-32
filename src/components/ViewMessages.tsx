import { useCallback, useEffect, useState } from 'react';
import { IMessage, MessageForm } from '../types';
import { Container } from 'react-bootstrap';
import MessagePost from './MessagePost.tsx';
import MessageItem from './MessageItem.tsx';
import axiosApi from '../axiosApi.ts';

const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [lastDate, setLastDate] = useState<null | string>(null);

  const fetchMessages = useCallback(async (datetime: string | null) => {
    const response: { data: IMessage[] } = await axiosApi.get<IMessage[]>(datetime ? `?datetime=${datetime}`: '');

    if (response.data.length > 0 && datetime === null) {
      setLastDate(response.data[response.data.length - 1].datetime);
      setMessages((prevState) => [...response.data.reverse(), ...prevState]);
    } else if (response.data.length > 0 && datetime !== null) {
      setLastDate(response.data[response.data.length - 1].datetime);
      setMessages((prevState) => [...response.data, ...prevState]);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      void fetchMessages(lastDate);
    }, 2000);
    return () => clearInterval(interval);
  }, [fetchMessages, lastDate]);

  const messageToSend = async (message: MessageForm) => {
    try {
      await axiosApi.post('', new URLSearchParams({...message}));
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Container>
      <MessagePost messageToSend={messageToSend}/>
      <hr/>
      <Container>
        {messages.map((message) => (
          <MessageItem key={message._id} message={message}/>
        ))}
      </Container>
    </Container>
  );
};

export default Chat;