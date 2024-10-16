export interface IMessage {
  _id: string;
  message: string;
  author: string;
  datetime: string;
}

export interface MessageForm {
  author: string;
  message: string;
}