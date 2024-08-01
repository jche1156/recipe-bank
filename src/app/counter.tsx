'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div className="flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 flex-1 basis-1/3 max-w-xs">
      <div className="p-6 bg-zinc-900 rounded-xl">
        <h2 className="text-2xl font-semibold leading-6 text-white">Counter</h2>
        <p className="mt-4 text-zinc-300">You know what this does</p>
        <p className="mt-8">
          <span className="text-5xl font-extrabold white">{count}</span>
          <span className="text-base font-medium text-zinc-100"> likes registered!</span>
        </p>
        <button 
          className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white rounded-md bg-zinc-700 hover:bg-zinc-800" 
          onClick={() => setCount(count + 1)}>
          Smash
        </button>
      </div>
    </div>
  )
}
