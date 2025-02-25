import { Link } from "react-router-dom";

interface BlogcardProps{
    authorName:string,
    title:string,
    content:string,
    publishedDate:string
    id:string
}

export const BlogCard= ({authorName,title,content,publishedDate,id}:BlogcardProps)=>{

    const wordCount = content.split(" ").length; // Count words
    const readingTime = Math.ceil(wordCount / 100); // Estimate reading time

    return<>
    <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-200 p-6 cursor-pointer">
        <div className="flex items-center">
            <div className="">
            <Avatar name={authorName}/>
            </div>
            <div className="font-extralight text-slate-600 mx-1.5">
            {authorName}
            </div>
              •  
            <div className="mx-1.5 font-extralight text-slate-400">
            {publishedDate}
            </div>
        </div>
        <div className="text-lg mt-1 font-semibold">
            {title}
        </div>
        <div className="text-md mt-1 font-normal"> 
            {content.slice(0,100)+"..."}
        </div>
        <div className="mt-1 text-slate-500">

            {`${readingTime} minutes read`}
        </div>


    </div>
    </Link>
    
    </>
}

export function Avatar({name="Anonymous",size=8}:{name:string,size?:number}){
    return<>
 <div
            className={`relative inline-flex items-center justify-center overflow-hidden bg-blue-100 mr-2 rounded-full`}
            style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
        >        <span className="font-semibold text-lg text-gray-600">{name.toUpperCase()[0]}</span>
    </div>
    </>
}
