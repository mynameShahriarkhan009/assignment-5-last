import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TechGrid from "./components/TechGrid.jsx";

function App() {
  const [techData, setTechData] = useState([]);
  const [stack, setStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data/techData.json")
      .then((res) => res.json())
      .then((data) => {
        setTechData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load tech data:", err);
        setIsLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.info(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  return (
    <div className="page-shell">
      <Header />
      <Hero />

      {isLoading ? (
        <p className="text-center text-gray-400 py-20">
          Loading technologies...
        </p>
      ) : (
        <TechGrid
          techList={techData}
          stack={stack}
          onAddToStack={handleAddToStack}
          sidebar={null}
        />
      )}

      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
