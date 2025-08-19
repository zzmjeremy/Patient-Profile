import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientProfile from "./pages/PatientProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/patients/:id" element={<PatientProfile />} />
      </Routes>
    </Router>
  );
}

export default App;