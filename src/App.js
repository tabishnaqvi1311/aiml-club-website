import { BrowserRouter, Routes, Route} from "react-router-dom";
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home";
import LatestNews from "./Pages/LatestNews";
import Members from "./Pages/Members/Members";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<LatestNews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
