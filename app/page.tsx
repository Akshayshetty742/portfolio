export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Akshay</h1>
        <p className="mt-4 text-gray-400 text-xl">
          AI & Frontend Developer
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            View Projects
          </button>

          <button className="border border-white px-6 py-3 rounded-xl">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}