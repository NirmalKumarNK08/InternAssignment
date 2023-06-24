//Importing all the components.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Information from "./pages/Information.jsx";
import Guide from "./pages/Guide.jsx";
import Contact from "./pages/Contact.jsx";
import Sidebar from "./components/SideBar.jsx";

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/information" element={<Information />}/>
          <Route path="/guide" element={<Guide />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
