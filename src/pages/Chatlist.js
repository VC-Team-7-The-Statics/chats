import styles from "../pages/Chatlist.module.scss";
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
    <div className={styles["chatlist-container"]}>
      <h1 className={styles.title}>채팅</h1>
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
            <li
              key={i}
              className={styles["chat-list"]}
              onClick={handleClick(chatroom)}
            >
              <div className={styles["chat-card-container"]}>
                <div className={styles["image-container"]}>
                  <img src={chatroom.image} alt="profile" />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.name}>{chatroom.name}</h2>
                  <p className={styles.paragraph}>대화하기</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Chatlist;
