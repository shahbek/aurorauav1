import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Components/Navbar";
function App() {

    return (
        
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
        </Routes>
        
        </>
       
    )

}

export default App;