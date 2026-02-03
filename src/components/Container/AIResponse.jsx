import "./AIResponse.css";

export default function AIResponse({ text = "Hi! I'm an AI response. How can I help you today?" }) {
  return (
    <div className="ai-message-wrapper">
      <div className="ai-avatar">AI</div>
      <div className="ai-message">
        {text}
      </div>
    </div>
  );
}
