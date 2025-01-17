import { useEffect, useCallback, useState, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [numbers, setNumbers] = useState(false);
  const [length, setLength] = useState(8);
  const [charecters, setCharecters] = useState(false);

  const reff = useRef(null);

  const passwordGenerator = useCallback(() => {
    let totalcharecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let finalpassw = "";
    if (numbers) totalcharecters += "1234567890";
    if (charecters) totalcharecters += "~`!@#$%^&*()_+[]{}:;'></?";

    for (let i = 0; i < length; i++) {
      let pos = Math.floor(Math.random() * totalcharecters.length);
      finalpassw += totalcharecters.charAt(pos);
    }
    setPassword(finalpassw);
  }, [numbers, length, charecters]);

  const handler = useCallback(() => {
    reff.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [numbers, length, charecters]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-orange-500">
      <div className="w-full max-w-lg shadow-lg rounded-lg px-6 py-6 bg-gray-800 text-orange-500">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Password Generator
        </h1>
        <div className="flex items-center space-x-3 mb-6">
          <input
            type="text"
            value={password}
            className="flex-1 px-4 py-2 rounded-md bg-gray-700 text-white outline-none border border-gray-600 focus:ring-2 focus:ring-blue-500"
            placeholder="Generated Password"
            readOnly
            ref={reff}
          />
          <button
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handler}
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Password Length: {length}</label>
            <input
              type="range"
              max={50}
              min={7}
              value={length}
              className="w-2/3 cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Include Numbers</label>
            <input
              type="checkbox"
              checked={numbers}
              className="cursor-pointer"
              onChange={() => setNumbers((prev) => !prev)}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Include Characters</label>
            <input
              type="checkbox"
              checked={charecters}
              className="cursor-pointer"
              onChange={() => setCharecters((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
