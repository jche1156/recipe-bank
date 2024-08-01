export default function recipe() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 justify-between p-12">
      <div className="flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 flex-1 basis-1/3 min-w-96 max-w-lg">
        <div className="p-6 bg-zinc-900 rounded-xl">
          <h2 className="text-2xl font-semibold leading-6 text-white">Spaghetti and Meatballs</h2>
          <p className="mt-4 text-zinc-300">It&apos;s so good</p>
          <p className="mt-8">
            <span className="text-5xl font-extrabold white">$3.45 </span>
            <span className="text-base font-medium text-zinc-100">per serving</span>
          </p>
          <a href="/">
            <button 
              className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white rounded-md bg-zinc-700 hover:bg-zinc-800" 
              type="button">
              Read
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 flex-1 basis-1/3 min-w-96 max-w-lg">
        <div className="p-6 bg-zinc-900 rounded-xl">
          <h2 className="text-2xl font-semibold leading-6 text-white">Caesar Salad</h2>
          <p className="mt-4 text-zinc-300">Cronch cronch</p>
          <p className="mt-8">
            <span className="text-5xl font-extrabold white">$2.10 </span>
            <span className="text-base font-medium text-zinc-100">per serving</span>
          </p>
          <a href="/">
            <button 
              className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white rounded-md bg-zinc-700 hover:bg-zinc-800" 
              type="button">
              Recipe
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 flex-1 basis-1/3 min-w-96 max-w-lg">
        <div className="p-6 bg-zinc-900 rounded-xl">
          <h2 className="text-2xl font-semibold leading-6 text-white">Salmon Filet</h2>
          <p className="mt-4 text-zinc-300">Yummy~</p>
          <p className="mt-8">
            <span className="text-5xl font-extrabold white">$4.12 </span>
            <span className="text-base font-medium text-zinc-100">per serving</span>
          </p>
          <a href="/">
            <button 
              className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white rounded-md bg-zinc-700 hover:bg-zinc-800" 
              type="button">
              Pantry
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
