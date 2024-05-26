import './App.css';
/*import Portfolio from './component/Portfolio';*/
import Login from './component/Login';
import Home from './component/Home';
import Product from './component/Product';
import Signup from './component/Signup';
import About from './component/About';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Login />} />
     
      </Routes>
      <Routes>
      <Route path="/Home" element={<Home />} />
     </Routes>
     <Routes>
     <Route path="/Product" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Routes>
      <Route path="/About" element={<About />} />
      </Routes>
   </Router>
   /*<div>
    <Portfolio />
   </div>*/
  );
}

export default App;