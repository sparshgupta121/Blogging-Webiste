import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./blogCard"

export const Fullblog = ({blog}:{blog:Blog})=>{

    return<>
    <Appbar/>
    <div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 pt-20 w-full max-w-5xl">
        <div className="col-span-12 sm:col-span-8 ">
        <div className="text-4xl font-extrabold;
">
        {blog.title}
        </div>
        <div className="text-slate-500 mt-2 ;
">
            Posted on Feb 22, 2025
        </div>
        <div className="mt-4 break-words overflow-wrap break-all">
  {blog.content}
</div>
        </div>
        <div className="col-span-12 sm:col-span-4">
            <div className="mx-12">
            <div className="text-md font-medium text-gray-600">
                Author    
            </div>  
            <div className="flex items-center mt-4">
                <div>
                <Avatar name={blog.author.name || "Anonymous"} size={8}/>  
                </div>
                <div className="ml-2">
                <div className="text-2xl font-bold">
                    {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-600">
                    Random Catch Phrase
                </div>
                </div>
            </div>
            </div>
            </div>
    </div>
    </div>
    </>

    
}