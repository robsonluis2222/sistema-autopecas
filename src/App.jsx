import './App.css'
import Root from './routes/root';
import Produtos from './routes/Produtos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/produtos" element={<Produtos />} />
    </Routes>
  )
}

export default App
