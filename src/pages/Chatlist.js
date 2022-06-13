import { Title, ChatCard } from "@the-statics/shared-components";
import styles from "../pages/Chatlist.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectChatroom } from "../features/chatroom/chatroomSlice";

function Chatlist() {
  const chatroom = useSelector(selectChatroom);

  return (
    <div>
      <Title value="채팅" />
      <ul className={styles["chat-list-container"]}>
        <li className={styles["chat-list"]}>
          {chatroom.chatrooms.map((chatroom, i) => (
            <>
              <Link to={`/chat/${chatroom.roomId}`} key={i}>
                <ChatCard profileImage={chatroom.image} name={chatroom.name} />
              </Link>
            </>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Chatlist;
