import { Link, useNavigate } from "react-router-dom"
import { Appbar } from "./components/Appbar"
import BlogContentInput from "./components/BlogContentInput"
import BlogTitleInput from "./components/BlogTitleInput"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useState } from "react"

export const Publish = ()=>{


    const[title,setTitle]=useState("")
    const[content,setContent]=useState("")

    const navigate = useNavigate()

    async function sendAsyncRequest(){
        const resp = await axios.post(`${BACKEND_URL}/api/v1/blog`,
            { title,content},{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            }
        )
        navigate(`/blog/${resp.data.id}`)

    }

return<>

    <div>
        <Appbar></Appbar>
    </div>

    <div className="flex justify-center">
        <div className="w-full max-w-3xl mx-6">
            <div className="my-6">
                <BlogTitleInput onChange={(e)=>{
                    setTitle(e.target.value)
                }}></BlogTitleInput>
            </div>
            <div className="my-6">
                <BlogContentInput onChange={(e)=>{
                    setContent(e.target.value)
                }}></BlogContentInput>
            </div>
            <div>
                <Link to={"/publish"}>
                <button type="button" onClick={sendAsyncRequest} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Publish Blog</button>
                </Link>
            </div>

        </div>


    </div>


</>
}

