"use client"

import { useState } from "react"

export const Quote = () => {
  const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
    { text: "Be so good they can't ignore you.", author: "Steve Martin" },
  ]

  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)])

  const getNewQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-200 to-gray-100 p-6">
      <div
        className="max-w-lg w-full text-center bg-white p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(128,128,128,0.5)] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(128,128,128,0.3)]
 active:scale-95"
        onClick={getNewQuote}
      >
        <div className="select-none">
          <div className="text-6xl text-gray-300 font-serif leading-none mb-4">"</div>
          <div className="text-xl md:text-2xl font-medium leading-relaxed text-gray-800">{quote.text}</div>
          <div className="mt-6 text-lg md:text-xl font-medium text-gray-600 italic">— {quote.author}</div>
          <div className="mt-8 text-sm text-gray-400 tracking-wide uppercase">Click anywhere for a new quote</div>
        </div>
      </div>
    </div>
  )
}

