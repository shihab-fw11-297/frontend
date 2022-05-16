import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Sucess from "./pages/Sucess/Sucess";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Sucess" element={<Sucess />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
