import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/login'
import SignUp from './pages/signUp/SignUp'
import Home from './pages/Home/home';
import { useAuthContext } from './context/authContext';
import toast from 'react-hot-toast';
import Profile from './modules/Profile/Profile';
function App() {
  const { authUser } = useAuthContext();


  return (
    <Routes>
      <Route path="/" element={authUser ? <Home /> : <Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path="/Profile" element={<Profile ></Profile>} />



      <Route path="*" element={<div>404 page not found </div>} />
    </Routes>
  );
}

export default App;
