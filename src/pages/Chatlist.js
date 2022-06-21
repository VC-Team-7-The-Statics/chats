import styles from "../pages/Chatlist.module.scss";
import { useSelector } from "react-redux";
import { selectChatroom } from "../features/chatroom/chatroomSlice";
import { Title, ChatList } from "@the-statics/shared-components";

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
    <div className={styles["chatlist-container"]}>
      <Title value="채팅" />
      <div className={styles["chatlists-container"]}>
        {!user.chatrooms.length && (
          <div className={styles["notification-container"]}>
            <p className={styles.notification}>
              진행중인 채팅이 아직 없습니다.
            </p>
          </div>
        )}

        <ul className={styles["chatlists"]}>
          {user.chatrooms.map((chatroom, i) => (
            <li key={i}>
              <ChatList
                image={chatroom.image}
                name={chatroom.name}
                onClickHandler={handleClick(chatroom)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Chatlist;
