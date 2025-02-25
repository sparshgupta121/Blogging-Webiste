import { Link } from "react-router-dom"
import UserDropdown from "./Dropdown"

export const Appbar= ()=>{
    return <>
    
    <div className="w-full border-b flex justify-between px-10 py-4 border-slate-200">
    <Link to={"/blogs"}  className="flex flex-col justify-center font-semibold text-2xl text-gray-700 cursor-pointer">

        <div>
            Medium
        </div>
    </Link>

        <div className="flex justify-between">
            <div className="flex items-center">
               <div className="mr-4"> 
            <Link to={"/publish"}>
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Add Blog</button>
            </Link>
            </div>
            </div>
            <UserDropdown/>
        </div>
    </div>
    
    
    </>
}