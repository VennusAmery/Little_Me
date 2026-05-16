import { useState } from "react";
import CharacterCreator from "./components/CharacterCreator";

const SCREENS = ["creator", "surprise", "cake", "notebook"];

export default function App() {
  const [screen, setScreen]       = useState("creator");
  const [charConfig, setCharConfig] = useState(null);

  const go = (s) => {
    setTimeout(() => setScreen(s), 80);
  };

  return (
    <main>
      {screen === "creator"  && (
        <CharacterCreator
          onContinue={(cfg) => { setCharConfig(cfg); go("surprise"); }}
        />
      )}
    </main>
  );
}