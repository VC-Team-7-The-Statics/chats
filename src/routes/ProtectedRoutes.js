import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectChatroom } from "../features/chatroom/chatroomSlice";

function ProtectedRoutes() {
  const user = useSelector(selectChatroom);

  if (!user.name) {
    return <Navigate to="/welcome" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
