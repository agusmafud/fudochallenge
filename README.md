# Fudo Challenge

Aplicación de posts y comentarios anidados construida con React, TypeScript y Vite.

## 🚀 Stack Tecnológico

- **React 19** + **TypeScript** + **Vite**
- **@tanstack/react-query** - Manejo de estado del servidor y caché
- **@emotion/react** - Estilos CSS-in-JS
- **react-router** - Navegación y routing
- **react-intersection-observer** - Infinite scroll
- **lucide-react** - Iconos
- **react-aria-components** - Componentes accesibles

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes de UI reutilizables
│   └── ...
├── containers/          # Containers que implementa los custom hooks con la lógica de negocio
│   ├── PostsListContainer.tsx    # Lista de posts con infinite scroll
│   └── PostContainer.tsx         # Vista detalle de post con comentarios
├── hooks/              # Custom hooks
│   ├── api/            # Hooks de fetching
├── helpers/            # Funciones auxiliares
└── types.tsx           # Definiciones de tipos TypeScript
```

## 🏗️ Arquitectura

### Containers vs Components

- **Containers** (`/containers`): Manejan la lógica de negocio, fetching de datos, y orquestan múltiples componentes. Ejemplos: `PostsListContainer`, `PostContainer`.
- **Components** (`/components`): Componentes presentacionales enfocados en UI, reciben props y renderizan. Ejemplos: `Post`, `NestedComment`, `Button`.

### Custom Hooks

- **`useFetch`**: Fetch simple con React Query
- **`useInfiniteScrollFetch`**: Fetch con paginación infinita usando intersection observer
- **`useUpdatePost`**: Mutaciones para crear/editar/eliminar posts
- **`useUpdateComment`**: Mutaciones para comentarios
- **`useNestedComments`**: Lógica para manejar comentarios anidados recursivamente

## 🎯 Scripts

```bash
pnpm dev      # Desarrollo
pnpm build    # Build de producción
pnpm preview  # Preview del build
pnpm lint     # Linter
```

## 📝 Características

- ✅ Lista de posts con infinite scroll
- ✅ Vista detalle de post
- ✅ Comentarios anidados recursivos
- ✅ Crear, editar y eliminar posts/comentarios
- ✅ Notificaciones toast
- ✅ Loading states y manejo de errores
- ✅ Diseño responsive

## 🔜 Pendientes

- 🔧 Debugging e implementación final de funciones de creación y edición
- 🧪 Testing con React Testing Library
- 📚 Documentación de componentes con Storybook
- ✨ Animaciones, skeletons, optimizaciones de UI y caché
- 🔍 Fine tunning de accesibilidad (ARIA labels, navegación por teclado)
- ⚡ Optimización de bundle size y code splitting
