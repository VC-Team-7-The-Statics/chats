import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useQuery } from "react-query";

import ProtectedRoutes from "./routes/ProtectedRoutes";
import Chatlist from "./pages/Chatlist";
import ApiService from "./services/Api";
import { setChatroom } from "./features/chatroom/chatroomSlice";
import CoffeeLoading from "./pages/CoffeeLoading";

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
    return <CoffeeLoading />;
  }

  return (
    <div className="container">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/chatlist" element={<Chatlist />} />
        </Route>
        <Route path="/welcome" element={<h1>Welcome page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
