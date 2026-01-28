
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Favourite } from './pages/favourites/Favourites'
import { Details } from './pages/details/Details'
import { Home } from './pages/home/Home'
import upArrow from './assets/icons8-up-arrow.svg'

function App() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourite />} />
          <Route path='/recipe-detail/:id' element={<Details />} />
        </Routes>
      </main>
      <button 
        onClick={handleScrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-white text-white rounded-full shadow-lg  "
        aria-label="Scroll to top"
      >
        <img src={upArrow} alt="Up arrow" className="w-11 h-11" />
      </button>
    </div>
  );
}

export default App
