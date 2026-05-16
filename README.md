# 🎀 Chibi Dress-Up Game — Customizer Engine

¡Bienvenido al sistema de personalización del **Chibi Character Customizer**! Este proyecto implementa un armario dinámico estilo rejilla (*grid*) que permite cambiar las prendas de un personaje en tiempo real, resolviendo de forma óptima el mapeo matemático entre las selecciones de la interfaz y una galería de **54 ilustraciones de combinaciones completas exportadas de forma fija**.

---

## 🎨 Características del Diseño Estético

El módulo visual de personalización está estructurado para ofrecer una experiencia limpia, fluida y con un estilo visual "cozy/neutral aesthetic", inspirándose en juegos táctiles minimalistas:

* **Visualizador Superior Flotante (`#FFF9F2`):** Un fondo cálido aislado con esquinas redondeadas dramáticas que enmarca al maniquí animado con el efecto sutil de flotación (`chibi-float`).
* **Controles de Navegación Clásicos (`‹` y `›`):** Botones circulares con sombras suaves (`shadow-soft`) para simular el desplazamiento clásico de pasarelas o pestañas.
* **Pestañas de Menú Dinámicas con Iconos Emoticonos:** Pestañas superiores para filtrar por categorías (👕 Camisas, 👖 Pantalones, 🎩 Sombreros, 👟 Calzado) que cambian de color y se hunden de forma táctil en el contenedor al estar activas (`translate-y-[2px]`).
* **Rejilla de Selección (*Grid*):** Una cuadrícula de 3 columnas (`grid-cols-3`) que aloja tarjetas cuadradas con bordes curvos muy marcados, mostrando una vista previa o miniatura de la prenda de manera aislada e interactiva.
