import { ChangeEvent } from "react";

export default function BlogContentInput({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return (
      <div className="">
        <label
          htmlFor="blog-content"
          className="block text-lg font-semibold text-gray-800 mb-2"
        >
          Blog Content
        </label>
        <textarea
          onChange={onChange}
          id="blog-content"
          placeholder="Write your blog content here..."
          rows={6}
          className="w-full p-3 text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow resize-none"
        />
      </div>
    );
  }

  