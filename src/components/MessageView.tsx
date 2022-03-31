import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { Table, Button, Typography } from "antd";

const { Paragraph, Title } = Typography;

const MessageView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getMessage } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const { message } = data;
  useEffect(() => {
    getMessage(id || "");
  }, []);
  return (
    <div>
      <Button onClick={() => navigate("/messages")}>Go back to list</Button>
      <Title>{message?.subject}</Title>
      <Paragraph>{message?.content}</Paragraph>
    </div>
  );
};

export default MessageView;
