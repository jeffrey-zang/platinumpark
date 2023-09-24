import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import All from './pages/All/All'
import Navigate from './pages/Navigate/Navigate'
import Create from './pages/Create/Create'
import Review from './pages/Review/Review'
import Lot from './pages/Lot/Lot'

import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <main className='flex'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<All />} />
        <Route path='/lot/:id' element={<Lot />} />
        <Route path='/review/:id' element={<Review />} />
        <Route path='/navigate/:id' element={<Navigate />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </main>
  )
};

export default App;
