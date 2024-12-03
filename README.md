# FisiqAI Frontend

¡Bienvenido a **FisiQAI**, un sitio web interactivo diseñado para repasar temas fundamentales de física! Este repositorio contiene el código del **frontend** del sitio, desarrollado con **React**.

## 🚀 Funcionalidades del Sitio Web

1. **Fórmulas**

   - Explora las fórmulas más importantes de temas como magnitudes, análisis vectorial, cinemática, MRU-MRUV, MVCL, movimiento parabólico.
   - El contenido teórico está almacenado en archivos Markdown y se renderiza dinámicamente.

2. **Preguntas Interactivas**

   - Responde preguntas de opción múltiple relacionadas con cada tema de física.
   - Recibe retroalimentación inmediata sobre tus respuestas.

3. **Guía de resolución de problemas**

   - Escribe tu problema de física y gracias a la inteligencia artificial te mostramos un paso a paso de como resolverlo.

## 🌟 Estructura del Proyecto

```plaintext
.
├── .next/                 # Archivos generados automáticamente por Next.js
├── public/                # Archivos estáticos accesibles públicamente
│   ├── content/           # Contenido adicional (Markdown u otros)
│   └── images/            # Imágenes utilizadas en el proyecto
├── src/                   # Código fuente del proyecto
│   ├── app/               # Aplicación principal y páginas
│   │   ├── (pages)/       # Rutas principales del sitio
│   │   │   ├── formulas/  # Página y componentes de fórmulas
│   │   │   ├── guia-resolucion/ # Página para guías de resolución
│   │   │   └── preguntas/ # Página para preguntas interactivas
│   │   ├── layout.tsx     # Diseño base para las páginas
│   │   └── page.tsx       # Página principal del sitio
│   ├── styles/            # Archivos de estilos (CSS, Tailwind)
│   ├── components/        # Componentes reutilizables del proyecto
│   ├── context/           # Contextos globales para manejo de estado
│   ├── data/              # Datos estáticos o mock usados en el proyecto
│   ├── hooks/             # Custom hooks para funcionalidades específicas
│   ├── interfaces/        # Definiciones de tipos e interfaces (TypeScript)
│   └── lib/               # Funciones auxiliares o utilitarias
├── .gitignore             # Archivos y carpetas ignorados por Git
├── .prettierrc            # Configuración de Prettier para formateo de código
├── components.json        # Configuración de componentes (opcional)
├── package-lock.json      # Archivo de lock para dependencias
├── package.json           # Configuración principal del proyecto y dependencias
├── tsconfig.json          # Configuración de TypeScript
├── README.md              # Documentación del proyecto
├── postcss.config.mjs     # Configuración de PostCSS
├── next-env.d.ts          # Tipos globales de Next.js para TypeScript
├── next.config.ts         # Configuración personalizada de Next.js
└── tailwind.config.ts     # Configuración de TailwindCSS
```

## 🛠️ Instalación y Ejecución en Local

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### 1. Clonar el Repositorio

Clona este repositorio en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/em1sit4/fisiqai-frontend
```

### 2. Instalación de dependencias

Asegúrate de que tienes Node.js instalado en tu máquina. Luego, navega al directorio del proyecto e instala las dependencias:

```bash
cd fisiqai-frontend
npm install --legacy-peer-deps
```

### 3. Iniciar el servidor local

Una vez que las dependencias estén instaladas, inicia el servidor de desarrollo:

```bash
npm run dev
```
