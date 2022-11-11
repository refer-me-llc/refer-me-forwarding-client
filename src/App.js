import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WildCard from './pages/WildCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<WildCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
