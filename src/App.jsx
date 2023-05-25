import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Registration from './pages/Registration';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/registration' element={<Registration />} />
    </Routes>
  );
}

export default App;
