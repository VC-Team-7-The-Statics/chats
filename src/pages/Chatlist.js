import styles from "../pages/Chatlist.module.scss";
import { Title, ChatCard } from "@the-statics/shared-components";
import { useSelector } from "react-redux";

import { selectChatroom } from "../features/chatroom/chatroomSlice";

function Chatlist() {
  const user = useSelector(selectChatroom);

  const handleClick = (chatroom) => () => {
    if (window.isNativeApp) {
      const link = {
        type: "CHATROOM",
        userId: user.id,
        roomId: chatroom.roomId,
        friendId: chatroom.id,
        friendImage: chatroom.image,
        friendName: chatroom.name,
      };

      window.ReactNativeWebView.postMessage(`${JSON.stringify(link)}`);
    }
  };

  return (
    <div>
      <Title value="채팅" />
      <ul className={styles["chat-list-container"]}>
        <li className={styles["chat-list"]}>
          {user.chatrooms.map((chatroom, i) => (
            <div key={i} onClick={handleClick(chatroom)}>
              <ChatCard profileImage={chatroom.image} name={chatroom.name} />
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Chatlist;
