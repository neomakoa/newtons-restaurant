import "./App.css";
import Header from "./header";
import Home from "./home";
import Footer from "./footer";
import bg from "./assets/images/ria-oZzoDW61aoM-unsplash.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
