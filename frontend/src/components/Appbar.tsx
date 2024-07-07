import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <div  className="sm:flex sm:items-center sm:justify-between">
            <div>
                <img src="https://companieslogo.com/img/orig/medium-0908be16.png?t=1720244494" className="h-8" alt="Medium logo" />
            </div> 
            <div className="px-4">
                <Link to={'/blogs'} className="flex flex-col  cursor-pointer self-center text-2xl font-semibold whitespace-nowrap">
                        Medium
                </Link>
            </div>
        </div>
        
        <div>
            <Link to={`/publish`}>
            <button type="button" className="mr-4 text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New</button>


            </Link>

            <Avatar size={"big"} name="User" />
        </div>
    </div>
}