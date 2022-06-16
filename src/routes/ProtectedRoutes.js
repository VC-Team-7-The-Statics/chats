import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectChatroom } from "../features/chatroom/chatroomSlice";

function ProtectedRoutes() {
  const chatroom = useSelector(selectChatroom);

  if (!chatroom?.id) {
    return <Navigate to="/welcome" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
