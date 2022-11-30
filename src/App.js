import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { ContactMe } from "./pages/contactPage/contactPage";
import { HomePage } from "./pages/Home/HomePage";
import { PageNotFound } from "./pages/PageNotFound/pageNotFound";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactUs" element={<ContactMe />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
