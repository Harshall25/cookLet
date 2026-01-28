import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context';
import logo from '../assets/icons8-cooking-book.svg'; 
export function NavBar() {
    const { searchParam, setSearchParam , handleSubmit} = useContext(GlobalContext);

    return <header className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 shadow-lg border-b-2 border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <Link to={'/'} className="cursor-pointer flex items-center gap-3 flex-shrink-0 group">
                    <img src={logo} alt="Recipe Logo" className="w-8 h-8 transition-transform group-hover:scale-110" />
                    <div className='font-bold text-green-900 text-2xl tracking-wide'>CookLet</div>
                </Link>

                <form onSubmit={handleSubmit} className="w-full md:max-w-md">
                    <div className="relative">
                        <input 
                            type="text"
                            value={searchParam}
                            onChange={(e) => setSearchParam(e.target.value)}
                            placeholder="Search for delicious recipes..."
                            className="w-full p-3 pr-12 bg-white/90 backdrop-blur-sm rounded-full border-2 border-white/50 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-200 shadow-lg placeholder-gray-500 transition-all duration-200"
                        />
                        <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-violet-600 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </form>
                
                <nav className="flex gap-3">
                    <Link to={'/'} className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-2.5 px-5 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Home
                    </Link>
                    <Link to={'/favourites'} className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-2.5 px-5 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        My Favourites
                    </Link>
                </nav>
            </div>
        </div>
    </header>
}
