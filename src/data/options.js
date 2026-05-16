// Opciones individuales que el usuario puede activar/desactivar
export const TOPS = [
  { id: "none",         label: "Ninguna"      },
  { id: "camisa",       label: "Camisa"       },
  { id: "camisa_negra", label: "Camisa negra" },
];

export const BOTTOMS = [
  { id: "none",        label: "Ninguno"    },
  { id: "pantalon",    label: "Pantalón"   },
  { id: "pantaloneta", label: "Pantaloneta"},
];

export const HATS = [
  { id: "none",     label: "Sin sombrero" },
  { id: "sombrero", label: "Sombrero"     },
];

export const FOOTWEAR = [
  { id: "none",   label: "Ninguno" },
  { id: "botas",  label: "Botas"   },
  { id: "tennis", label: "Tennis"  },
];

// Mapa completo: combinación → número de imagen
// La clave es "top|bottom|hat|footwear"
export const COMBO_MAP = {
  "none|none|none|none":               1,
  "camisa|none|none|none":             2,
  "camisa_negra|none|none|none":       3,
  "none|pantalon|none|none":           4,
  "none|pantaloneta|none|none":        5,
  "none|none|sombrero|none":           6,
  "none|none|none|botas":              7,
  "none|none|none|tennis":             8,
  "camisa|pantalon|none|none":         9,
  "camisa|pantaloneta|none|none":      10,
  "camisa|none|sombrero|none":         11,
  "camisa|none|none|botas":            12,
  "camisa|none|none|tennis":           13,
  "camisa_negra|pantalon|none|none":   14,
  "camisa_negra|pantaloneta|none|none":15,
  "camisa_negra|none|sombrero|none":   16,
  "camisa_negra|none|none|botas":      17,
  "camisa_negra|none|none|tennis":     18,
  "none|pantalon|sombrero|none":       19,
  "none|pantalon|none|botas":          20,
  "none|pantalon|none|tennis":         21,
  "none|pantaloneta|sombrero|none":    22,
  "none|pantaloneta|none|botas":       23,
  "none|pantaloneta|none|tennis":      24,
  "none|none|sombrero|botas":          25,
  "none|none|sombrero|tennis":         26,
  "camisa|pantalon|sombrero|none":     27,
  "camisa|pantalon|none|botas":        28,
  "camisa|pantalon|none|tennis":       29,
  "camisa|pantaloneta|sombrero|none":  30,
  "camisa|pantaloneta|none|botas":     31,
  "camisa|pantaloneta|none|tennis":    32,
  "camisa|none|sombrero|botas":        33,
  "camisa|none|sombrero|tennis":       34,
  "camisa_negra|pantalon|sombrero|none":  35,
  "camisa_negra|pantalon|none|botas":     36,
  "camisa_negra|pantalon|none|tennis":    37,
  "camisa_negra|pantaloneta|sombrero|none":38,
  "camisa_negra|pantaloneta|none|botas":  39,
  "camisa_negra|pantaloneta|none|tennis": 40,
  "camisa_negra|none|sombrero|botas":     41,
  "camisa_negra|none|sombrero|tennis":    42,
  "none|pantalon|sombrero|botas":      43,
  "none|pantalon|sombrero|tennis":     44,
  "none|pantaloneta|sombrero|botas":   45,
  "none|pantaloneta|sombrero|tennis":  46,
  "camisa|pantalon|sombrero|botas":    47,
  "camisa|pantalon|sombrero|tennis":   48,
  "camisa|pantaloneta|sombrero|botas": 49,
  "camisa|pantaloneta|sombrero|tennis":50,
  "camisa_negra|pantalon|sombrero|botas":   51,
  "camisa_negra|pantalon|sombrero|tennis":  52,
  "camisa_negra|pantaloneta|sombrero|botas":53,
  "camisa_negra|pantaloneta|sombrero|tennis":54,
};

// Helper: dada la selección actual, devuelve el número de imagen
export function getComboImage(top, bottom, hat, footwear) {
  const key = `${top}|${bottom}|${hat}|${footwear}`;
  return COMBO_MAP[key] ?? 1; // fallback a imagen 1 si no encuentra
}
