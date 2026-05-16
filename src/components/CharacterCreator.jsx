import { useState } from "react";
import ChibiCharacter from "./ChibiCharacter";
import { TOPS, BOTTOMS, HATS, FOOTWEAR } from "../data/options";

// 1. IMPORTANTE: El orden de este arreglo define las pestañas horizontales.
// Cada categoría apunta estrictamente a su llave correspondiente en el estado (configKey)
const CATEGORIES = [
  { id: "top",      label: "Camisa",    icon: "👕", options: TOPS,     configKey: "top"      },
  { id: "bottom",   label: "Pantalón",  icon: "👖", options: BOTTOMS,  configKey: "bottom"   },
  { id: "hat",      label: "Sombrero",  icon: "🎩", options: HATS,     configKey: "hat"      },
  { id: "footwear", label: "Calzado",   icon: "👟", options: FOOTWEAR, configKey: "footwear" },
];

export default function CharacterCreator() {
  // Estado base inicial del muñeco
  const [config, setConfig] = useState({
    top:      "none",
    bottom:   "none",
    hat:      "none",
    footwear: "none",
  });
  
  // Índice para saber qué pestaña de ropa está activa
  const [activeCatIdx, setActiveCatIdx] = useState(0);

  // Obtenemos los datos de la categoría actual basada en la pestaña activa
  const cat = CATEGORIES[activeCatIdx];

  // Función corregida: Garantiza que si estás en la pestaña de sombreros, 
  // modifique "hat" y no "footwear"
  const applyOption = (id) => {
    setConfig(c => ({ 
      ...c, 
      [cat.configKey]: id  // Modifica dinámicamente 'top', 'bottom', 'hat' o 'footwear'
    }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between font-sans">
      
      {/* ── Zona Superior: Visualización del Chibi ── */}
      <div className="w-full flex-1 max-w-md bg-[#FFF9F2] relative flex items-center justify-center p-6 rounded-b-[40px] shadow-sm">
        <button className="absolute left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md border border-[#F0E6D8] text-xl font-bold text-[#A89888]">‹</button>
        
        {/* Render del maniquí */}
        <ChibiCharacter config={config} />
        
        <button className="absolute right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md border border-[#F0E6D8] text-xl font-bold text-[#A89888]">›</button>

        <button className="absolute top-4 right-4 bg-white border-2 border-[#DCD0C0] px-3 py-1.5 rounded-2xl flex flex-col items-center shadow-sm text-[10px] font-bold text-[#6D655A]">
          <span>🐱</span>
          <span>Switch</span>
        </button>
      </div>

      {/* ── Zona Media: Pestañas de Selección (Filtros de clóset) ── */}
      <div className="w-full max-w-md px-4 mt-4 flex gap-1 border-b-2 border-[#F3EDE4]">
        {CATEGORIES.map((c, i) => (
          <button
            key={c.id}
            onClick={() => setActiveCatIdx(i)} // Cambia de pestaña
            className={`
              flex-1 py-3 text-center rounded-t-2xl font-bold text-sm transition-all duration-150 border-t-2 border-x-2
              ${activeCatIdx === i
                ? "bg-[#FAF6F0] border-[#DCD0C0] text-[#6D655A] translate-y-[2px]"
                : "bg-white border-transparent text-[#BAAFA3] hover:text-[#6D655A]"
              }
            `}
          >
            <span className="text-lg block">{c.icon}</span>
            <span className="text-[10px] block mt-0.5 font-bold">{c.label}</span>
          </button>
        ))}
      </div>

      {/* ── Zona Inferior: Grid de Miniaturas de la categoría seleccionada ── */}
      <div className="w-full max-w-md bg-[#FAF6F0] flex-1 p-4 grid grid-cols-3 gap-3 overflow-y-auto content-start min-h-[260px]">
        {cat.options.map(opt => {
          // Comprueba si la opción de la cuadrícula es la que está activa en el personaje
          const isSelected = config[cat.configKey] === opt.id;
          
          return (
            <button
              key={opt.id}
              onClick={() => applyOption(opt.id)} // Ejecuta el cambio de ropa
              className={`
                aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 p-2 border-2 transition-all
                ${isSelected
                  ? "bg-white border-[#C2B5A3] shadow-md scale-95"
                  : "bg-[#F3EDE4] border-transparent hover:bg-white hover:border-[#DCD0C0]"
                }
              `}
            >
              {/* Contenedor cuadrado de la miniatura de la prenda */}
              <div className="w-14 h-14 bg-white/60 rounded-xl flex items-center justify-center overflow-hidden p-1">
                <img 
                  src={opt.iconImg} 
                  alt={opt.label} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <span className="text-[11px] font-bold text-[#6D655A] truncate w-full text-center px-1">
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
      
    </div>
  );
}