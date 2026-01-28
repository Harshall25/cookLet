
import './App.css'
import {Routes , Route} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Favourite } from './pages/favourites/Favourites'
import { Details } from './pages/details/Details'
import { Home } from './pages/home/Home'

function App() {

  return (
    <div>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route  path='/favourites' element={<Favourite />}/>
          <Route path='/recipe-detail/:id' element={<Details />}/>
        </Routes>
      </div>
    </div>

  );
}

export default App
