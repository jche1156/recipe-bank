import Counter from "./counter"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 flex-1 basis-1/3 max-w-xs">
        <div className="p-6 bg-zinc-900 rounded-xl">
          <h2 className="text-2xl font-semibold leading-6 text-white">Recipe App 2024</h2>
          <p className="mt-4 text-zinc-300">Experience a new way of cooking</p>
          <p className="mt-8">
            <span className="text-5xl font-extrabold white">$0 </span>
            <span className="text-base font-medium text-zinc-100"> Try the demo!</span>
          </p>
          <a href="recipe">
          <button 
            className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white rounded-md bg-zinc-700 hover:bg-zinc-800" 
            type="button">
            Let&apos;s Go
          </button>
          </a>
        </div>
      </div>

      <Counter />
    
    </main>
  );
}
