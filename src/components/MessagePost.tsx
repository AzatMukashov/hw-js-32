import React, { useState } from "react";
import { MessageForm } from "../types";
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";

interface Props {
  messageToSend: (message: MessageForm) => void;
}

const MessagePost: React.FC<Props> = ({ messageToSend }) => {
  const [form, setForm] = useState<MessageForm>({
    author: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.author.trim().length > 0 && form.message.trim().length > 0) {
      messageToSend({ ...form });
      setForm({
        author: "",
        message: "",
      });
    } else {
      alert("dont empty fields");
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <FormGroup className="d-flex gap-2 flex-column">
          <Form.Group>
            <FormLabel htmlFor="author">Author</FormLabel>
            <Form.Control
              required
              type="text"
              name="author"
              value={form.author}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              required
              type="text"
              name="message"
              value={form.message}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Button
              variant="outline-primary"
              as="input"
              type="submit"
              value="Send"
              disabled={
                form.author.trim().length === 0 ||
                form.message.trim().length === 0
              }
            />
          </Form.Group>
        </FormGroup>
      </Form>
    </>
  );
};

export default MessagePost;
