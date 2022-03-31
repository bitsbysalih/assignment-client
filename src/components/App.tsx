import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../state";
import Messages from "./Messages";
import MessagesList from "./MessagesList";
import MessageView from "./MessageView";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Messages />} />
          <Route path="/messages" element={<MessagesList />} />
          <Route path="/messages/:id" element={<MessageView />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
