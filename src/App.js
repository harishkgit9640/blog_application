
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.json';
import TopHeader from './Components/Topheader/TopHeader'
import Register from './Components/register/Register';
import Login from './Components/login/Login';
import Write from './Components/write/Write';
import Home from './Components/Home/Home';
import Settings from './Components/setting/Settings';
import { Route, Routes } from 'react-router-dom';
import SinglePost from './Components/singlepost/SinglePost';

function App() {
  const user = true;
  return (
    <>
      <TopHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/setting' element={user ? <Settings /> : <Register />} />
        <Route path='/post/:id' element={<SinglePost />} />
        <Route path='/post/:user' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
