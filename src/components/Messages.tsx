import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Messages: React.FC = () => {
  const navigate = useNavigate();
  const { getMessages } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const { unread, messages } = data;

  useEffect(() => {
    getMessages();
  }, []);

  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "0 auto",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      <h1>Hello Jim</h1>
      <p>
        You have {unread || 0} unread out of {messages?.length} messages
      </p>
      <button onClick={() => navigate(`/messages`)}>View Messages</button>
    </div>
  );
};

export default Messages;
