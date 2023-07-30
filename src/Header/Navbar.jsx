import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-green-700">
            <div className="flex justify-between items-center py-4 max-w-[1240px] mx-auto text-white">
                <div>
                    <h1>LOGO</h1>
                </div>
                <ul className="flex items-center gap-8">
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink>About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;