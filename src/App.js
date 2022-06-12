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
import { setUser } from "./features/user/userSlice";

const ApiInstance = new ApiService(axios);

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useQuery("myProfile", ApiInstance.getProfile, {
    onSuccess: ({ data }) => {
      if (!data.success) {
        return navigate("/welcome");
      }

      const user = {
        id: data.profile._id,
        name: data.profile.name,
        image: data.profile.image,
      };

      dispatch(setUser(user));
    },
    staleTime: Infinity,
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
