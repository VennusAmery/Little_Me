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
    <div className="min-h-screen bg-crayon-texture flex flex-col items-center p-4 md:p-8 select-none">
      
      {/* TÍTULO DEL JUEGO */}
      <div className="text-center mb-6 md:mb-8 w-full z-50">
        <h1 className="crayon-title text-3xl md:text-5xl font-bold tracking-wide drop-shadow-sm text-[#5B4E41]">
          Chibi Dress-Up ✨
        </h1>
        <p className="crayon-subtitle text-xs md:text-sm mt-2 text-[#8E7C6E] font-medium">
          Elige la combinación perfecta ✦
        </p>
      </div>

      {/* 🔄 CONTENEDOR PRINCIPAL DUal En móvil es vertical, en escritorio (md:) es horizontal */}
      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-xs border-4 border-dashed border-[#C4B29E] rounded-[32px] p-4 md:p-6 flex flex-col md:flex-row gap-6 items-stretch shadow-xl">
        
        {/* COLUMNA IZQUIERDA: El dibujo principal */}
        <div className="flex-1 bg-[#FFFDF9] border-4 border-[#E6DCCF] rounded-[24px] relative flex items-center justify-center p-6 min-h-[360px] md:min-h-[480px]">
          {/* Flechas Estéticas */}
          <button className="absolute left-4 w-10 h-10 rounded-full bg-[#FAF5EE] border-2 border-[#D8C9B5] text-[#A2907D] text-xl font-bold active:scale-90 shadow-sm transition-transform">‹</button>
          
          <ChibiCharacter config={config} />
          
          <button className="absolute right-4 w-10 h-10 rounded-full bg-[#FAF5EE] border-2 border-[#D8C9B5] text-[#A2907D] text-xl font-bold active:scale-90 shadow-sm transition-transform">›</button>
          
          {/* Botón reset */}
            <button 
            onClick={resetCharacter}
            className="absolute top-4 right-4 bg-white border-2 border-[#D8C9B5] px-3 py-1.5 rounded-2xl flex flex-col items-center text-[10px] font-bold text-[#6D655A] hover:bg-[#FAF5EE] hover:scale-105 active:scale-95 transition-all shadow-xs cursor-pointer z-50"
            >
            <span>🔃</span>
            <span>Reset</span>
            </button>
        </div>

        {/* COLUMNA DERECHA: El Clóset (Categorías + Grid de opciones) */}
        <div className="w-full md:w-[420px] flex flex-col justify-between bg-[#FDFBF7] border-4 border-[#E6DCCF] rounded-[24px] overflow-hidden">
          
          {/* Pestañas de Categorías */}
          <div className="flex gap-1 border-b-4 border-[#E6DCCF] p-2 bg-[#F5EFE6]">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveCatIdx(i)}
                className={`
                  flex-1 py-3 text-center rounded-t-xl font-bold text-sm border-2 border-b-0 transition-all duration-150
                  ${activeCatIdx === i
                    ? "bg-[#FCFAF5] border-[#C4B29E] text-[#5B4E41] translate-y-[10px] z-10"
                    : "bg-white/50 border-transparent text-[#BAAFA3] hover:text-[#5B4E41]"
                  }
                `}
              >
                <span className="text-xl block">{c.icon}</span>
                <span className="text-[10px] block font-bold mt-0.5 md:hidden lg:block">{c.label}</span>
              </button>
            ))}
          </div>

          {/* Cuadrícula (Grid) de Miniaturas */}
          <div className="flex-1 p-4 grid grid-cols-3 gap-3 overflow-y-auto content-start min-h-[260px] max-h-[380px] md:max-h-[none]">
            {cat.options.map(opt => {
              const isSelected = config[cat.configKey] === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => applyOption(opt.id)}
                  className={`
                    crayon-card aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 p-2 border-3 transition-all
                    ${isSelected
                      ? "bg-white border-[#A8937D] shadow-inner scale-95"
                      : "bg-[#F4EFE6]/60 border-transparent hover:bg-white hover:border-[#D8C9B5]"
                    }
                  `}
                >
                  {/* Recuadro Interno de la Prenda */}
                  <div className="w-14 h-14 bg-white/80 border-2 border-[#EBE3D5] rounded-xl flex items-center justify-center overflow-hidden p-1">
                    <img src={opt.iconImg} alt={opt.label} className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className="text-[11px] font-bold text-[#6D655A] truncate w-full text-center px-1">
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
}