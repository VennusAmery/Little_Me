// 1. Opciones individuales del catálogo con sus miniaturas
export const TOPS = [
  { id: "none",         label: "Ninguna",      iconImg: "/assets/icons/none.png" },
  { id: "camisa",       label: "Camisa",       iconImg: "/assets/icons/camisa.png" },
  { id: "camisa_negra", label: "Camisa negra", iconImg: "/assets/icons/camisa_negra.png" },
];

export const BOTTOMS = [
  { id: "none",        label: "Ninguno",     iconImg: "/assets/icons/none.png" },
  { id: "pantalon",    label: "Pantalón",    iconImg: "/assets/icons/pantalon.png" },
  { id: "pantaloneta", label: "Pantaloneta", iconImg: "/assets/icons/pantaloneta.png" },
];

export const HATS = [
  { id: "none",     label: "Sin sombrero", iconImg: "/assets/icons/none.png" },
  { id: "sombrero", label: "Sombrero",     iconImg: "/assets/icons/sombrero.png" },
];

export const FOOTWEAR = [
  { id: "none",   label: "Ninguno", iconImg: "/assets/icons/none.png" },
  { id: "botas",  label: "Botas",   iconImg: "/assets/icons/botas.png" },
  { id: "tennis", label: "Tennis",  iconImg: "/assets/icons/tennis.png" },
];

// =====================================================================
// MAPA DE COMBINACIONES (Estructura: "top|bottom|hat|footwear")
// =====================================================================

export const COMBO_MAP = {
  // ── [BLOQUE 1] PRENDAS INDIVIDUALES O NADA (1 a 8) ──────────────────
  "none|none|none|none":                     1,  // Sin nada
  "camisa|none|none|none":                   2,  // Camisa
  "camisa_negra|none|none|none":             3,  // Camisa negra
  "none|pantalon|none|none":                 4,  // Pantalón
  "none|pantaloneta|none|none":              5,  // Pantaloneta
  "none|none|sombrero|none":                 6,  // Sombrero
  "none|none|none|botas":                    7,  // Botas
  "none|none|none|tennis":                   8,  // Tennis

  // ── [BLOQUE 2] COMBINACIONES DE DOS PRENDAS (9 a 26) ────────────────
  "camisa|pantalon|none|none":               9,  // Camisa + Pantalón
  "camisa|pantaloneta|none|none":            10, // Camisa + Pantaloneta
  "camisa|none|sombrero|none":               11, // Camisa + Sombrero
  "camisa|none|none|botas":                  12, // Camisa + Botas
  "camisa|none|none|tennis":                 13, // Camisa + Tennis
  
  "camisa_negra|pantalon|none|none":         14, // Camisa negra + Pantalón
  "camisa_negra|pantaloneta|none|none":      15, // Camisa negra + Pantaloneta
  "camisa_negra|none|sombrero|none":         16, // Camisa negra + Sombrero
  "camisa_negra|none|none|botas":            17, // Camisa negra + Botas
  "camisa_negra|none|none|tennis":           18, // Camisa negra + Tennis
  
  "none|pantalon|sombrero|none":             19, // Pantalón + Sombrero
  "none|pantalon|none|botas":                20, // Pantalón + Botas
  "none|pantalon|none|tennis":               21, // Pantalón + Tennis
  "none|pantaloneta|sombrero|none":          22, // Pantaloneta + Sombrero
  "none|pantaloneta|none|botas":             23, // Pantaloneta + Botas
  "none|pantaloneta|none|tennis":            24, // Pantaloneta + Tennis
  
  "none|none|sombrero|botas":                25, // Sombrero + Botas
  "none|none|sombrero|tennis":               26, // Sombrero + Tennis

  // ── [BLOQUE 3] COMBINACIONES DE TRES PRENDAS (27 a 46) ──────────────
  "camisa|pantalon|none|botas":              27, // Camisa + Pantalón + Botas
  "camisa|pantalon|none|tennis":             28, // Camisa + Pantalón + Tennis
  "camisa|pantalon|sombrero|none":           29, // Camisa + Pantalón + Sombrero
  
  "camisa|pantaloneta|sombrero|none":        30, // Camisa + Pantaloneta + Sombrero
  "camisa|pantaloneta|none|botas":           31, // Camisa + Pantaloneta + Botas
  "camisa|pantaloneta|none|tennis":          32, // Camisa + Pantaloneta + Tennis
  "camisa|none|sombrero|botas":              33, // Camisa + Sombrero + Botas
  "camisa|none|sombrero|tennis":             34, // Camisa + Sombrero + Tennis
  
  "camisa_negra|pantalon|sombrero|none":     35, // Camisa negra + Pantalón + Sombrero
  "camisa_negra|pantalon|none|botas":        36, // Camisa negra + Pantalón + Botas
  "camisa_negra|pantalon|none|tennis":       37, // Camisa negra + Pantalón + Tennis
  
  "camisa_negra|pantaloneta|sombrero|none":  38, // Camisa negra + Pantaloneta + Sombrero
  "camisa_negra|pantaloneta|none|botas":     39, // Camisa negra + Pantaloneta + Botas
  "camisa_negra|pantaloneta|none|tennis":    40, // Camisa negra + Pantaloneta + Tennis
  "camisa_negra|none|sombrero|botas":        41, // Camisa negra + Sombrero + Botas
  "camisa_negra|none|sombrero|tennis":       42, // Camisa negra + Sombrero + Tennis
  
  "none|pantalon|sombrero|botas":            43, // Pantalón + Sombrero + Botas
  "none|pantalon|sombrero|tennis":           44, // Pantalón + Sombrero + Tennis
  "none|pantaloneta|sombrero|botas":         45, // Pantaloneta + Sombrero + Botas
  "none|pantaloneta|sombrero|tennis":        46, // Pantaloneta + Sombrero + Tennis

  // ── [BLOQUE 4] OUTFITS COMPLETOS / CUÁDRUPLES (47 a 54) ─────────────
  "camisa|pantalon|sombrero|botas":          47, // Camisa + Pantalón + Sombrero + Botas
  "camisa|pantalon|sombrero|tennis":         48, // Camisa + Pantalón + Sombrero + Tennis
  "camisa|pantaloneta|sombrero|botas":       49, // Camisa + Pantaloneta + Sombrero + Botas
  "camisa|pantaloneta|sombrero|tennis":      50, // Camisa + Pantaloneta + Sombrero + Tennis
  
  "camisa_negra|pantalon|sombrero|botas":    51, // Camisa negra + Pantalón + Sombrero + Botas
  "camisa_negra|pantalon|sombrero|tennis":   52, // Camisa negra + Pantalón + Sombrero + Tennis
  "camisa_negra|pantaloneta|sombrero|botas": 53, // Camisa negra + Pantaloneta + Sombrero + Botas
  "camisa_negra|pantaloneta|sombrero|tennis":54, // Camisa negra + Pantaloneta + Sombrero + Tennis
};

// genera la clave actual y devuelve el número de imagen (1–54)
export function getComboImage(top, bottom, hat, footwear) {
  const key = `${top}|${bottom}|${hat}|${footwear}`;
  return COMBO_MAP[key] ?? 1; // fallback: imagen 
}
