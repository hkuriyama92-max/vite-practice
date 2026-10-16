import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-emerald-600 flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-6">こんにちは、リアクションしてください！</h1>
      
      <button
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
        className="px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg shadow-md hover:bg-emerald-50 transition active:scale-95 cursor-pointer"
      >
        押した回数: {count}
      </button>
    </div>
  )
}

export default App