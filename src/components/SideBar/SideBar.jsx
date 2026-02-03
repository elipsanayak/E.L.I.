import Tool from "./Tool";
import ChatHistory from "./ChatHistory";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <h2>E.L.I.</h2>
      <Tool label="New chat" />
      <Tool label="Search chats" />
      <Tool label="Images" />
      <Tool label="Apps" />
      <Tool label="Projects" />

      <ChatHistory />
    </div>
  );
}
