import "./App.scss";
import "./_reset.scss";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Chatlist from "./pages/Chatlist";
import Chat from "./pages/Chat";

function App() {
  const isLoggedIn = true;

  return (
    <div className="container">
      <Routes>
        <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
          <Route path="/chatlist" element={<Chatlist />} />
          <Route path="/chat/:room_id" element={<Chat />} />
        </Route>
        <Route path="/welcome" element={<h1>Welcome page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
