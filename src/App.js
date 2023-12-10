import "./App.css";
import Home from "./home";
import bg from "./assets/images/ria-oZzoDW61aoM-unsplash.jpg"

function App() {
  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'contain',backgroundAttachment: "fixed",}}>
      <Home />
    </div>
  );
}

export default App;
