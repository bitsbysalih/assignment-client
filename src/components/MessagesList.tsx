import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { Table, Button, Typography } from "antd";
import Header from "./Header";

const { Paragraph } = Typography;
const MessagesList: React.FC = () => {
  const navigate = useNavigate();
  const { getMessages } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const { messages } = data;

  useEffect(() => {
    getMessages();
  }, []);
  const columns = [
    { title: "Subject", key: "subject", dataIndex: "subject" },
    {
      title: "Content",
      key: "content",
      dataIndex: "content",
      render: (content: string) => (
        <Paragraph ellipsis={true}>{content}</Paragraph>
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (message: { _id: any; isRead: boolean }) => (
        <Button
          type={!message.isRead ? "primary" : "dashed"}
          size="middle"
          onClick={() => navigate(`/messages/${message._id}`)}
        >
          Read
        </Button>
      ),
    },
  ];

  console.log(data);
  return (
    <div>
      <Header />
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      <Table columns={columns} dataSource={messages} />
    </div>
  );
};

export default MessagesList;
