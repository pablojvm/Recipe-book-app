import NavBar from "./NavBar";
import "./App.css";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Recetas from "./Recetas";

function App() {
  return (
    <div id="App">
      <NavBar />
      <div id="Sidebar-Recetas">
        <SideBar />
        <Recetas />
      </div>
      <Footer />
    </div>
  );
}

export default App;
