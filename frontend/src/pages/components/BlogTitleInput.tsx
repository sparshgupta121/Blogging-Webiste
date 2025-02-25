import { ChangeEvent } from "react";

export default function BlogTitleInput({onChange}:{onChange:(e:ChangeEvent<HTMLInputElement>)=>void}) {
    return (
      <div className="">
        <label
          htmlFor="blog-title"
          className="block text-lg font-semibold text-gray-800 mb-2"
        >
          Blog Title
        </label>
        <input
          onChange={onChange}
          type="text"
          id="blog-title"
          placeholder="Enter your blog title..."
          className="w-full p-3 text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
        />
      </div>
    );
  }
  
  