import CharacterCreator from "./components/CharacterCreator";

export default function App() {
  return (
    <main className="bg-white min-h-screen relative">
      <CharacterCreator />

      {/* 🖍️ Filtro SVG Matemático Invisible para Simular el Borde de Crayón */}
      <svg className="absolute w-0 h-0 invisible" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="crayon-distortion">
            {/* Genera un ruido fractal rugoso */}
            {/* Desplaza los píxeles de la imagen usando el ruido anterior */}
          </filter>
        </defs>
      </svg>
    </main>
  );
}