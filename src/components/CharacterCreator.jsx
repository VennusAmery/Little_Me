import { useState } from "react";
import ChibiCharacter from "./ChibiCharacter";
import { TOPS, BOTTOMS, HATS, FOOTWEAR } from "../data/options";

const CATEGORIES = [
  { id: "top",      label: "Camisa",    icon: "👕", options: TOPS,     configKey: "top"      },
  { id: "bottom",   label: "Pantalón",  icon: "👖", options: BOTTOMS,  configKey: "bottom"   },
  { id: "hat",      label: "Sombrero",  icon: "🎩", options: HATS,     configKey: "hat"      },
  { id: "footwear", label: "Calzado",   icon: "👟", options: FOOTWEAR, configKey: "footwear" },
];

function Arrow({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-fog border-2 border-mist text-dusk text-xl
                 hover:bg-sand hover:border-stone flex items-center justify-center
                 shrink-0 shadow-soft transition-all duration-150"
    >
      {dir === "left" ? "‹" : "›"}
    </button>
  );
}

function OptionPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2 rounded-full text-sm font-semibold border-2 whitespace-nowrap
        transition-all duration-200 shrink-0
        ${active
          ? "border-warm bg-sand text-ink shadow-soft scale-105"
          : "border-mist bg-fog text-dusk hover:border-stone hover:bg-sand"
        }
      `}
    >
      {label}
    </button>
  );
}

export default function CharacterCreator({ onContinue }) {
  const [config, setConfig] = useState({
    top:      "none",
    bottom:   "none",
    hat:      "none",
    footwear: "none",
  });
  const [activeCatIdx, setActiveCatIdx] = useState(0);
  const [changing, setChanging] = useState(false);

  const cat = CATEGORIES[activeCatIdx];
  const currentOptIdx = cat.options.findIndex(o => o.id === config[cat.configKey]);

  const navigate = (dir) => {
    const next = (currentOptIdx + dir + cat.options.length) % cat.options.length;
    applyOption(cat.options[next].id);
  };

  const applyOption = (id) => {
    setChanging(true);
    setTimeout(() => {
      setConfig(c => ({ ...c, [cat.configKey]: id }));
      setChanging(false);
    }, 150);
  };

  return (
    <div className="screen-enter min-h-screen flex flex-col items-center justify-between
                    py-6 px-4 bg-linear-to-b from-fog to-cream">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-ink tracking-wide">Viste tu personaje</h1>
        <p className="text-sm text-warm mt-1">Elige la combinación perfecta ✦</p>
      </div>

      {/* Chibi */}
      <div className={`transition-opacity duration-150 mt-2 ${changing ? "opacity-0" : "opacity-100"}`}>
        <ChibiCharacter config={config}/>
      </div>

      {/* Flechas + opciones */}
      <div className="flex items-center gap-3 mt-3 w-full max-w-sm justify-center">
        <Arrow dir="left"  onClick={() => navigate(-1)}/>
        <div className="flex gap-2 overflow-x-auto py-1 px-1">
          {cat.options.map(opt => (
            <OptionPill
              key={opt.id}
              label={opt.label}
              active={config[cat.configKey] === opt.id}
              onClick={() => applyOption(opt.id)}
            />
          ))}
        </div>
        <Arrow dir="right" onClick={() => navigate(1)}/>
      </div>

      {/* Resumen de selección actual */}
      <div className="flex gap-2 flex-wrap justify-center mt-2 max-w-xs">
        {CATEGORIES.map(c => {
          const selected = c.options.find(o => o.id === config[c.configKey]);
          if (!selected || selected.id === "none") return null;
          return (
            <span key={c.id} className="text-xs bg-sand border border-stone text-ink
                                         px-3 py-1 rounded-full font-semibold">
              {c.icon} {selected.label}
            </span>
          );
        })}
      </div>

      {/* Categorías */}
      <div className="w-full max-w-lg mt-4">
        <div className="bg-fog border-2 border-mist rounded-soft p-2 flex justify-around">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveCatIdx(i)}
              className={`
                flex flex-col items-center gap-1 px-3 py-1 rounded-cozy
                text-xs font-semibold transition-all duration-150
                ${activeCatIdx === i
                  ? "bg-sand text-ink border border-stone shadow-soft"
                  : "text-dusk hover:text-ink"
                }
              `}
            >
              <span className="text-base">{c.icon}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Continuar */}
      <button
        onClick={() => onContinue(config)}
        className="mt-5 px-10 py-3 rounded-full bg-sand border-2 border-stone
                   text-ink font-bold text-base shadow-warm
                   hover:bg-cream hover:scale-105 transition-all duration-200"
      >
        Continuar ✦
      </button>
    </div>
  );
}