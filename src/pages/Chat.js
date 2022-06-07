import { Button01, Input02 } from "@the-statics/shared-components";
import styles from "../pages/Chat.module.scss";
import CHATROOMS from "../chatrooms.json";

function Chat() {
  return (
    <div className={styles["chat-container"]}>
      <Button01 type="button">뒤로</Button01>
      <div className={styles.chats}>
        <ul>
          {CHATROOMS[0].chats.map((chat, index) => (
            <li
              key={index}
              className={
                chat.id === "629b1bd99bb15274874724d9"
                  ? `${styles["chat-block"]} ${styles.left}`
                  : `${styles["chat-block"]} ${styles.right}`
              }
            >
              <span className={styles.text}>{chat.text}</span>
              <span className={styles.date}>
                {new Date(1654342345004).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.input}>
        <Input02 placeholder="입력해주세요."></Input02>
      </div>
    </div>
  );
}

export default Chat;

/**
 * {values.map((value, index) => (
        <Checkbox key={index} value={value} {...others}></Checkbox>
      ))}
 */
