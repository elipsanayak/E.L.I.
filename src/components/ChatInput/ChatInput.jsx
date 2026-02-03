import Attachment from "./Attachment";
import "./ChatInput.css";

export default function ChatInput() {
  return (
    <div className="chat-input">
      <Attachment />
      <input type="text" placeholder="Ask anything" />
      <button className="mic">🎤</button>
    </div>
  );
}
