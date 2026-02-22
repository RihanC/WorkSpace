import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <>
      <div className="main">
        <Header />
      </div>
      <div className="body-content">
        <Content />
      </div>
      <br></br>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
