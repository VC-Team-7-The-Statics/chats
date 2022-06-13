import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Chatlist from "./pages/Chatlist";
import Chat from "./pages/Chat";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import ApiService from "./services/Api";
import axios from "axios";
import { setChatroom } from "./features/chatroom/chatroomSlice";

const ApiInstance = new ApiService(axios);

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useQuery("chatlist", ApiInstance.getChatlist, {
    onSuccess: ({ data }) => {
      if (!data.success) {
        return navigate("/welcome");
      }

      const chatroom = {
        id: data.id,
        name: data.name,
        image: data.image,
        chatrooms: data.chatrooms,
      };

      dispatch(setChatroom(chatroom));
    },
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/chatlist" element={<Chatlist />} />
          <Route path="/chat/:room_id" element={<Chat />} />
        </Route>
        <Route path="/welcome" element={<h1>Welcome page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
