import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home.jsx";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar.jsx";

export default function App() {
  return (
    <div className="app">
      <SideBar/>
      <div className="main">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}
