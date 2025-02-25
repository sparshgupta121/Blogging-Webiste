import { useParams } from "react-router-dom"
import { Fullblog } from "./components/FullBlog"
import { useBlog } from "./hooks"



export const Blog = () =>{

    const {id}=useParams()

    const{blog,loading}=useBlog({ id:id ||"" })

    if(loading || !blog){
        return<>
        
        Loaddinnggg......
        </>
    }


    return <>
    <Fullblog blog={blog}></Fullblog>
    </>
}