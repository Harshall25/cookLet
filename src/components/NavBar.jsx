import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context';
import logo from '../assets/icons8-cooking-book.svg'; 
export function NavBar() {
    const { searchParam, setSearchParam , handleSubmit} = useContext(GlobalContext);

    return <div className="flex border-amber-200 items-center border-b-blue-950 text-[20px] justify-around p-2.5 bg-amber-300 gap-40 font-mono min-w-fit max-w-full">

        <Link to={'/'} className="cursor-pointer flex items-center gap-2">
            <img src={logo} alt="Recipe Logo" className="w-8 h-8" />
            <div className='font-mono text-green-900 font-bold'>CookLet</div>
        </Link>

        <form  onSubmit={handleSubmit}>
            <input type="text"
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
                placeholder="enter dish name.."
                className="p-3 bg-amber-200 rounded-full shadow-amber-600 drop-shadow-xl px-10 py-1.5 "
            />
        </form>
        
        <div className="flex justify-between gap-10 items-center ">
            <Link to={'/'} className="bg-violet-600 py-1.5 px-2.5 rounded-[10px] cursor-pointer">Home</Link>
            <Link to={'/favourites'} className="bg-violet-600 py-1.5 px-2.5 rounded-[10px] cursor-pointer ">My Favourites</Link>
        </div>
    </div>
}
