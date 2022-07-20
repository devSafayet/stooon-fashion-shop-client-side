import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
