import Container from "../components/Container/Container";
import ChatInput from "../components/ChatInput/ChatInput";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Container />
      <ChatInput />
    </div>
  );
}
