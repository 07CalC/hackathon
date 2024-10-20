import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export const Navbar = () => {
  return (
    
      <div className="h-12 z-[1]  border-b border-text w-full bg-lavendar flex justify-between items-center md:px-10">
          <div className="flex items-center">
            <NavLink to="/">
            <p className="text-3xl font-bold text-text">Mango</p>
            </NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <input className="bg-whitish border border-[#000000] w-full rounded-full placeholder:text-[#1b3c72bc] p-1 text-center shadow-sm shadow-[#000000]" placeholder="Search" />
            <CiSearch className="text-text text-3xl md:text-5xl cursor-pointer font-bold" />
            </div>
          <div className=" hidden md:flex items-center space-x-5">
            <NavLink to="/eventfilter">Events</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
          </div>
      </div>
    
  );
};
