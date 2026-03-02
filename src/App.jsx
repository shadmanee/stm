import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/stm/" element={<Home />} />
      {/* more routes to be added */}
    </Routes>
  );
}

export default App;