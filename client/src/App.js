
import {Routes , Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
function App() {
  return (
    <>      
    <Routes>
      <Route path="/" element= {<HomePage />}/>
      <Route path="/contact" element= {<Contact />}/>
      <Route path="/about" element= {<About />}/>
      <Route path="/policy" element= {<Policy />}/>
      <Route path="/register" element = {<Register/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path ="/dashboard" element = {<PrivateRoute/>}>
          <Route path = "" element = {<Dashboard/>} />
      </Route>

      <Route path="*" element= {<PageNotFound />}/>
    </Routes>
    </>
  );
}

export default App;
