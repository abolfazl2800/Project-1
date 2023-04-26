import {Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout'; 
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Dashboard from './Component/Dashboard';
import Download from './Component/Download';

const App = () => {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Profile/*' exact element={<Profile />}/>
      </Routes>
    </Layout>
  )
}

export default App;