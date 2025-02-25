import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import type { SignupInput } from "@sparsh121/blog-commons"
import axios from "axios"
import { BACKEND_URL } from "../../config"
import { LabelledInput } from "./labelledinput"

export const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const [postInput, setPostInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInput)
      const {jwt} = response.data
      localStorage.setItem("token", jwt)
      navigate("/blogs")
    } catch (error) {
      alert("Request Failed. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-md w-full backdrop-blur-sm backdrop-filter">
        <h2 className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
          {type === "signin" ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-center mt-3 text-gray-500">
          {type === "signin" ? "Don't have an account?" : "Already have an account?"}
          <Link
            className="ml-1 text-blue-600 hover:text-blue-700 hover:underline transition-colors font-medium"
            to={type === "signin" ? "/signup" : "/signin"}
          >
            {type === "signin" ? "Sign Up" : "Sign In"}
          </Link>
        </p>

        <div className="mt-2 space-y-4">
          {type === "signup" && (
            <LabelledInput
              placeholder="Enter your name"
              label="Name"
              onChange={(e) => setPostInput({ ...postInput, name: e.target.value })}
            />
          )}
          <LabelledInput
            placeholder="Enter your email"
            label="Email"
            type="email"
            onChange={(e) => setPostInput({ ...postInput, email: e.target.value })}
          />
          <LabelledInput
            placeholder="Enter your password"
            label="Password"
            type="password"
            onChange={(e) => setPostInput({ ...postInput, password: e.target.value })}
          />
        </div>

        <button
          type="button"
          onClick={sendRequest}
          className="w-full mt-8 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-8 py-3.5 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
        >
          {type === "signin" ? "Sign in to your account" : "Create your account"}
        </button>

        <div className="mt-6 text-center">
          <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Forgot your password?</button>
        </div>
      </div>
    </div>
  )
}

