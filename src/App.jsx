import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000") // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {data
        ? data.map((item, index) => (
            <div
              key={index}
              className="m-4 bg-white shadow-md rounded-lg overflow-hidden max-w-xs"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-2xl mb-2">{item.name}</h2>
                <h3 className="font-semibold text-xl mb-1">Abilities:</h3>
                <ul>
                  {item.abilities.map((ability, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      {ability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        : "Loading..."}
    </div>
  );
}

export default App;
