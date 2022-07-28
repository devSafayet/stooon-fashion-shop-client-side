import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import { Route, Routes } from 'react-router';
import Footer from './Components/Shared/Footer/Footer';
import Shop from './Components/Shop/Shop';
import 'font-awesome/css/font-awesome.min.css';
import NotFound from './Components/Shared/NotFound/NotFound';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
