import MyApp from "./Components/TestError/FauxApp";
import { HomePage } from "./Components/Home";
import { Link, Route, Routes } from "react-router-dom";
import Error404 from './Components/Error404';
import "./Styles/error.css";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          
          <Route path="/error" element={<MyApp />} />

          <Route path="/*" element={<Error404 />} />
        </Routes>

        <Link to="/home"><button style={{marginTop:"20px", marginRight:"20px"}}>Prev</button></Link>
        <Link to="/error"><button style={{marginTop:"20px"}}>Next</button></Link>
    </div>
  );
}

export default App;
