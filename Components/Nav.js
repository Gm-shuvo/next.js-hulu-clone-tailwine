import Requestdata from "../utils/Requestdata"

const Nav = () => {
    return (
    <nav className="relative">
        <div className=' flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20c overflow-x-scroll scrollbar-hide'>

            {Object.entries(Requestdata).map(([key, { title, url }]) =>
                <h2 key={key} className=' cursor-pointer transition duration-100 transform hover:scale-125 hover:text-red-300 last:pr-10
                '>{title}</h2>
            )}
            <div className='absolute bg-gradient-to-l from-[#06202A] w-1/12 h-9'/>
            
        </div>
    </nav>
      
    )
}

export default Nav
