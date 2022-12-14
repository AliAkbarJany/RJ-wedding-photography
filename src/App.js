import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import CheckOut from './components/CheckOut/CheckOut';


function App() {
  return (
    <div >
      <Header></Header>
     <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/checkout" element={
            <RequireAuth>
                <CheckOut></CheckOut>
            </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
