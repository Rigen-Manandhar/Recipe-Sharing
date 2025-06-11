import Logo from '../assets/logo.png'

const NavBar = () => {

    return(<>
    
        <div className = "flex justify-center items-center fixed top-0 left-0 right-0 z-50">
            <div className = "bg-white w-full shadow-lg h-16 flex justify-around items-center px-4 text-shadow-lg font-pacifico text-xl">

                <img 
                className = "size-16" 
                src = {Logo}
                alt="Logo"
                />

                <div className = "flex gap-8">
                    <span className = "cursor-pointer transition duration-300 ease-in-out hover:text-orange-500">Home</span>
                    <span className = "cursor-pointer transition duration-300 ease-in-out hover:text-orange-500">Recipies</span>
                    <span className = "cursor-pointer transition duration-300 ease-in-out hover:text-orange-500">Categories</span>
                    <span className = "cursor-pointer transition duration-300 ease-in-out hover:text-orange-500">Submit Recipies</span>
                    <span className = "cursor-pointer transition duration-300 ease-in-out hover:text-orange-500">Search</span>
                </div>

                <div className = " flex gap-2 ">
                    <span className = "cursor-pointer transition duration-300 ease-in-out hover:text-orange-500">LogIn</span>
                    <span>|</span>
                    <span className = "cursor-pointer transition duration-300 ease-in-out hover:text-orange-500">SignUp</span>
                </div>

            </div>


        </div>
    
    </>)

}
export default NavBar