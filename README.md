# Portfolio — Gisella Alaniz

Portfolio personal armado con Next.js 16 (App Router), TypeScript, Tailwind CSS v4 y Motion, listo para desplegar en Vercel. Diseño minimalista inspirado en la estética de vercel.com: monocromo, tipografía Geist, hairline borders y microinteracciones sutiles.

## Cómo personalizarlo

Todo el contenido está en `app/components/`, separado por sección — no hace falta tocar estilos para editar texto:

- `Nav.tsx` — enlaces del menú y botón "Hablemos".
- `Hero.tsx` — título principal y bajada, con la animación de entrada orquestada (Motion).
- `About.tsx` — texto de perfil y chips de stack (array `stack` al principio del archivo).
- `Projects.tsx` — tarjetas de proyectos (array `projects`). El primer proyecto ocupa las dos columnas (`size: "lg"`); podés reordenar o agregar más.
- `Experience.tsx` — línea de tiempo de experiencia (array `roles`).
- `Contact.tsx` — datos de contacto (array `links`) — actualizá los `href` de LinkedIn y GitHub, que hoy son placeholder (`#`).
- `Reveal.tsx` — wrapper reutilizable que anima la aparición de cada sección al hacer scroll (Motion `whileInView`). Los demás componentes lo importan; no debería hacer falta tocarlo.

El título de la pestaña y la descripción para buscadores están en `app/layout.tsx` (`export const metadata`).

## Colores y tipografías

Los tokens de color y las variables de fuente están centralizados en `app/globals.css` (bloque `:root`):

- `--accent` — el único acento de color (azul), usado con moderación.
- `--bg`, `--surface`, `--surface-2` — fondos, todos oscuros.
- `--line`, `--line-strong` — bordes hairline.
- `--ink`, `--ink-muted`, `--ink-faint` — texto en distintos niveles de énfasis.

La tipografía es **Geist** (sans y mono), instalada vía el paquete npm `geist` — la misma fuente que usa Vercel, creada por Vercel en colaboración con basement.studio. No depende de Google Fonts en el build.

## Animaciones (Motion)

El sitio usa [Motion](https://motion.dev) (antes Framer Motion) para:

- Una animación de entrada orquestada en el Hero (stagger de badge → título → bajada → botones).
- Reveals al hacer scroll en cada sección, vía el componente `Reveal`.
- Microinteracciones de hover en las tarjetas de proyectos.

Todo respeta `prefers-reduced-motion` (ver `globals.css`).

## Correr en local

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Desplegar en Vercel

1. Subí esta carpeta a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com), "Add New Project" → importá el repositorio.
3. Vercel detecta Next.js automáticamente — no hace falta configurar nada más.
4. "Deploy". En un par de minutos tenés la URL pública.

También podés instalar la CLI de Vercel (`npm i -g vercel`) y correr `vercel` desde esta carpeta para desplegar sin pasar por GitHub.
