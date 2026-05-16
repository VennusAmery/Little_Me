import { getComboImage } from "../data/options";

// Todas las imágenes van en /public/assets/combos/

export default function ChibiCharacter({ config, celebrating = false }) {
  const { top = "none", bottom = "none", hat = "none", footwear = "none" } = config;

  const imgNumber = getComboImage(top, bottom, hat, footwear);
  const src = `/assets/combos/${imgNumber}.png`;

  return (
    <div
      className={`select-none ${celebrating ? "celebrate" : "chibi-float"}`}
      style={{ width: 260, height: 360 }}
    >
      <img
        key={src}
        src={src}
        alt={`personaje-${imgNumber}`}
        className="w-full h-full object-contain transition-opacity duration-200"
        draggable={false}
      />
    </div>
  );
}