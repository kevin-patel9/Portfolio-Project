import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import { ContactMe } from "./contactMe";
import { HomePage } from "./HomePage";

function MainPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactUs" element={<ContactMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MainPage;
