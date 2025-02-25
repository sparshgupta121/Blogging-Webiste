

import { Appbar } from "./components/Appbar"
import { BlogCard } from "./components/blogCard"
import { useBlogs } from "./hooks"

export const Blogs = () =>{

    const{loading,blogs}=useBlogs()
    console.log(blogs);
    console.log(loading);
    
    
    if(loading){
        return<>
        Loading...
        </>
    }


    return <>

    <Appbar></Appbar>
    <div className="flex justify-center">
    <div className="min-w-full md:min-w-2xl md:max-w-2xl">
        {blogs.map(blog=> <BlogCard id={blog.id} authorName={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} publishedDate="22 feb 2025" ></BlogCard>
)}
    </div>
    </div>
    </>
}
