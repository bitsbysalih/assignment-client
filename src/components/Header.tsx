import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Header: React.FC = () => {
  const { getMessages } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const { unread, messages } = data;

  useEffect(() => {
    getMessages();
  }, []);
  return (
    <div>
      <p>Hey there Jim you have {unread} unread messages</p>
    </div>
  );
};

export default Header;
