import "./UserMessage.css";

export default function UserMessage({ text = "Hello! This is a user message." }) {
  return (
    <div className="user-message-wrapper">
      <div className="user-avatar">U</div>
      <div className="user-message">
        {text}
      </div>
    </div>
  );
}
