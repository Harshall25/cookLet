
import './App.css'
import {Routes , Route} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Favourite } from './pages/favourites/Favourites'
import { Details } from './pages/details/Details'
import { Home } from './pages/home/Home'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="grow">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route  path='/favourites' element={<Favourite />}/>
          <Route path='/recipe-detail/:id' element={<Details />}/>
        </Routes>
      </main>
      
    </div>

  );
}

export default App
