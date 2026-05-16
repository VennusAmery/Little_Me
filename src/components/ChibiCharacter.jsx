import { getComboImage } from "../data/options";

export default function ChibiCharacter({ config }) {
  // 1. Forzamos valores por defecto si React pasa un undefined
  const top = config?.top || "none";
  const bottom = config?.bottom || "none";
  const hat = config?.hat || "none";
  const footwear = config?.footwear || "none";

  // 2. Obtenemos el número de la combinación (Del 1 al 54)
  const imgNumber = getComboImage(top, bottom, hat, footwear);
  
  // 3. Armamos la ruta de la imagen
  const src = `/assets/combos/${imgNumber}.png`;

  // 4. IMPRIMIR EN CONSOLA PARA AUDITAR (El truco para cazar el bug)
  // Abre la consola del navegador (F12) y verás exactamente qué busca React en tiempo real
  console.log(`[Clóset Log] Buscando combinación: "${top}|${bottom}|${hat}|${footwear}" -> Imagen asignada: ${imgNumber}.png`);

  return (
    <div
      className="select-none chibi-float relative mx-auto"
      style={{ width: 260, height: 360 }}
    >
      <img
        key={src} // Forzar el re-render de la imagen al cambiar de ropa
        src={src}
        alt={`personaje-outfit-${imgNumber}`}
        className="w-full h-full object-contain transition-opacity duration-150"
        draggable={false}
        onError={(e) => {
          console.error(`[Error de Carga] No se encontró el archivo: /assets/combos/${imgNumber}.png`);
        }}
      />
    </div>
  );
}