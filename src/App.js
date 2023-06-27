
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../src/components/common/Navbar';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { NoRoute } from './components/common/NoRoute';
import Login from './components/common/Login';
import { Register } from './components/common/Register';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<NoRoute />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={< />} /> */}
      </Routes>
    </div>
  );
}

export default App;
