import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import All from './pages/All/All'
import Navigate from './pages/Navigate/Navigate'
import Create from './pages/Create/Create'
import Review from './pages/Review/Review'

import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <main className='flex'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<All />} />
        <Route path='/navigate' element={<Navigate />} />
        <Route path='/create' element={<Create />} />
        <Route path='/review' element={<Review />} />
      </Routes>
    </main>
  )
};

export default App;
