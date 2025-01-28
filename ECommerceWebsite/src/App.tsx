import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './components/Products';
import Users from './components/Users';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/users" element={<Users />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
