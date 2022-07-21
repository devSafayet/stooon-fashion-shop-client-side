import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import { Route, Routes } from 'react-router';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
