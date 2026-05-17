import { useState } from "react";
import ChibiCharacter from "./ChibiCharacter";
import { TOPS, BOTTOMS, HATS, FOOTWEAR } from "../data/options";

const CATEGORIES = [
  { id: "top",      label: "Prendas",    icon: "👕", options: TOPS,     configKey: "top"      },
  { id: "bottom",   label: "Pantalones", icon: "👖", options: BOTTOMS,  configKey: "bottom"   },
  { id: "hat",      label: "Accesorios", icon: "👒", options: HATS,     configKey: "hat"      },
  { id: "footwear", label: "Calzado",    icon: "👟", options: FOOTWEAR, configKey: "footwear" },
];

export default function CharacterCreator() {
  const [config, setConfig] = useState({
    top:      "none",
    bottom:   "none",
    hat:      "none",
    footwear: "none",
  });
  const [activeCatIdx, setActiveCatIdx] = useState(0);

  const cat = CATEGORIES[activeCatIdx];

  const applyOption = (id) => {
    setConfig(c => ({ ...c, [cat.configKey]: id }));
  };

  const resetCharacter = () => {
    setConfig({
      top:      "none",
      bottom:   "none",
      hat:      "none",
      footwear: "none",
    });
  };

  return (
    <div className="min-h-screen bg-crayon-texture flex flex-col items-center p-3 md:p-8 select-none justify-center">
      
      {/* 👑 TÍTULO DEL JUEGO */}
      <div className="text-center mb-4 md:mb-6 w-full z-10">
        <h1 className="crayon-title text-2xl md:text-5xl font-bold tracking-wide drop-shadow-sm text-[#5B4E41]">
          Chibi Dress-Up ✨
        </h1>
        <p className="crayon-subtitle text-[10px] md:text-sm mt-0.5 text-[#8E7C6E] font-medium">
          Elige la combinación perfecta ✦
        </p>
      </div>

      {/* 🔄 CONTENEDOR PRINCIPAL DUAL */}
      <div className="w-full max-w-sm md:max-w-5xl bg-white/70 backdrop-blur-xs border-4 border-dashed border-[#C4B29E] rounded-[28px] p-3 md:p-6 flex flex-col md:flex-row gap-4 items-stretch shadow-xl">
        
        {/* COLUMNA IZQUIERDA: El dibujo principal (Maniquí) - Le bajamos la prioridad de capa (z-10) */}
        <div className="bg-[#FFFDF9] border-4 border-[#E6DCCF] rounded-[20px] relative flex items-center justify-center p-2 h-[270px] md:h-auto md:flex-1 md:min-h-[500px] z-10">
          {/* Flechas Estéticas */}
          <button className="absolute left-3 w-8 h-8 rounded-full bg-[#FAF5EE] border-2 border-[#D8C9B5] text-[#A2907D] text-lg font-bold active:scale-90 shadow-sm transition-transform flex items-center justify-center cursor-pointer">‹</button>
          
          <ChibiCharacter config={config} />
          
          <button className="absolute right-3 w-8 h-8 rounded-full bg-[#FAF5EE] border-2 border-[#D8C9B5] text-[#A2907D] text-lg font-bold active:scale-90 shadow-sm transition-transform flex items-center justify-center cursor-pointer">›</button>
          
          {/* Botón Reset */}
          <button 
            onClick={resetCharacter}
            className="absolute top-3 right-3 bg-white border-2 border-[#D8C9B5] px-2.5 py-1 rounded-xl flex flex-col items-center text-[9px] font-bold text-[#6D655A] hover:bg-[#FAF5EE] hover:scale-105 active:scale-95 transition-all shadow-xs cursor-pointer z-30"
          >
            <span>🔃</span>
            <span>Reset</span>
          </button>
        </div>

        {/* COLUMNA DERECHA: El Clóset - Le subimos la prioridad de capa (z-20) para que reciba los clics en móviles */}
        <div className="w-full md:w-[420px] flex flex-col bg-[#FDFBF7] border-4 border-[#E6DCCF] rounded-[20px] overflow-hidden h-[250px] md:h-auto z-20 relative">
          
          {/* Pestañas de Categorías */}
          <div className="flex gap-1 border-b-4 border-[#E6DCCF] p-1.5 bg-[#F5EFE6] shrink-0 z-30 relative">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveCatIdx(i)}
                className={`
                  flex-1 py-1.5 text-center rounded-t-lg font-bold text-xs border-2 border-b-0 transition-all duration-150 cursor-pointer touch-manipulation
                  ${activeCatIdx === i
                    ? "bg-[#FCFAF5] border-[#C4B29E] text-[#5B4E41] translate-y-[6px] md:translate-y-[10px] z-40"
                    : "bg-white/50 border-transparent text-[#BAAFA3] hover:text-[#5B4E41]"
                  }
                `}
              >
                <span className="text-base md:text-xl block">{c.icon}</span>
                <span className="text-[9px] md:text-[10px] block font-bold mt-0.5 md:hidden lg:block">{c.label}</span>
              </button>
            ))}
          </div>

          {/* Cuadrícula (Grid) de Miniaturas - Totalmente libre de obstrucciones */}
          <div className="flex-1 p-3 grid grid-cols-3 gap-2 overflow-y-auto content-start md:max-h-[420px] z-30 relative">
            {cat.options.map(opt => {
              const isSelected = config[cat.configKey] === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => applyOption(opt.id)}
                  className={`
                    crayon-card aspect-square rounded-xl flex flex-col items-center justify-center gap-1 p-1.5 border-2 transition-all cursor-pointer touch-manipulation
                    ${isSelected
                      ? "bg-white border-[#A8937D] shadow-inner scale-95"
                      : "bg-[#F4EFE6]/60 border-transparent hover:bg-white hover:border-[#D8C9B5]"
                    }
                  `}
                >
                  {/* Recuadro Interno de la Prenda */}
                  <div className="w-11 h-11 md:w-14 md:h-14 bg-white/80 border border-[#EBE3D5] rounded-lg flex items-center justify-center overflow-hidden p-0.5">
                    <img src={opt.iconImg} alt={opt.label} className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className="text-[10px] md:text-[11px] font-bold text-[#6D655A] truncate w-full text-center px-0.5">
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sombra interna o decorado estético */}
          <div className="absolute inset-0 border-2 border-transparent pointer-events-none rounded-[20px] z-50"></div>

        </div>

      </div>

    </div>
  );
}