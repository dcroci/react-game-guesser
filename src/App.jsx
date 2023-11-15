import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/play" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
