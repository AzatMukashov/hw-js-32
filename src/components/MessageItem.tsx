import { Container } from "react-bootstrap";
import { IMessage } from "../types";
import React from "react";
import dayjs from "dayjs";

interface Props {
  message: IMessage;
}

const MessageItem: React.FC<Props> = ({ message }) => {
  return (
    <Container className="my-4 p-3 border border-secondary overflow-auto">
      <p className="fs-5">
        {dayjs(message.datetime).format("DD.MM.YYYY HH:mm")}
      </p>
      <h6>{message.author}</h6>
      <hr />
      <p>{message.message}</p>
    </Container>
  );
};

export default MessageItem;
