import { Route, Routes } from 'react-router-dom';
import './App.css';
import Info from './pages/Info';
import Support from './pages/Support';
import Complete from './pages/Complete';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Support />} />
        <Route path='/info' element={<Info />} />
        <Route path='/complete' element={<Complete />} />
      </Routes>
    </>
  );
}

export default App;
