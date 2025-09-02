# 📱 Gestión de Usuarios Angular

Una aplicación web desarrollada con Angular 16 para la gestión y visualización de usuarios, implementando una arquitectura modular con navegación y servicios HTTP.

## 🚀 Características Principales

### ✨ Funcionalidades Implementadas
- **Sistema de Navegación**: Menú de navegación responsivo con Bootstrap y Font Awesome
- **Gestión de Usuarios**: Visualización de usuarios con datos obtenidos de API externa
- **Arquitectura Modular**: Organización por páginas y servicios
- **Responsive Design**: Interfaz adaptativa para diferentes dispositivos
- **Loading States**: Indicadores de carga durante las peticiones HTTP

### 🏗️ Estructura del Proyecto
```
src/
├── app/
│   ├── core/
│   │   └── services/          # Servicios de la aplicación
│   │       └── usuarios.service.ts
│   ├── pages/                 # Módulos de páginas
│   │   ├── home/             # Página principal
│   │   ├── usuarios/         # Gestión de usuarios
│   │   ├── perfil/           # Perfil de usuario
│   │   ├── estructuras/      # Estructuras de datos
│   │   └── documentacion/    # Documentación
│   └── shared/               # Componentes compartidos
├── assets/                   # Recursos estáticos
└── scss/                     # Estilos globales
    └── variables.scss        # Variables SCSS
```

### 🛠️ Tecnologías Utilizadas
- **Framework**: Angular 16.2.11
- **UI Framework**: Bootstrap 5.2.3
- **Icons**: Font Awesome
- **HTTP Client**: Angular HttpClient
- **Routing**: Angular Router
- **Styling**: SCSS con variables globales
- **API**: JSONPlaceholder para datos de usuarios

## 🎯 Páginas y Funcionalidades

### 🏠 Página de Inicio (Home)
- Página de bienvenida con información del proyecto
- Navegación principal hacia otras secciones
- Diseño centrado y responsivo

### 👥 Gestión de Usuarios
- Listado completo de usuarios obtenidos de API externa
- Tarjetas de usuario con información detallada:
  - Datos personales (nombre, email, teléfono)
  - Información de dirección
  - Datos de la empresa
- Estado de carga con delay de 5 segundos
- Responsive cards con Bootstrap

### 🔧 Otras Páginas
- **Perfil**: Gestión del perfil de usuario
- **Estructuras**: Visualización de estructuras de datos
- **Documentación**: Documentación del proyecto

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18.19.0)
- npm o yarn
- Angular CLI 16.2.11

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd gestion-usuarios-angular

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

## 💻 Scripts Disponibles

### Servidor de Desarrollo
```bash
npm start
# o
ng serve
```
Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente al cambiar los archivos.

### Construcción
```bash
npm run build
# o
ng build
```
Los artefactos de construcción se almacenarán en el directorio `dist/`.

### Pruebas Unitarias
```bash
npm test
# o
ng test
```
Ejecuta las pruebas unitarias mediante [Karma](https://karma-runner.github.io).

### Modo Watch
```bash
npm run watch
# o
ng build --watch --configuration development
```

## 🎨 Estilos y Diseño

### Variables SCSS
El proyecto utiliza un sistema de variables SCSS centralizadas en `src/scss/variables.scss` que incluye:
- Paleta de colores personalizada
- Medidas y espaciados consistentes
- Mixins reutilizables

### Framework CSS
- **Bootstrap 5.2.3**: Para componentes y grid system
- **Font Awesome**: Para iconografía
- **SCSS**: Para estilos personalizados

## 🔗 API y Servicios

### Servicio de Usuarios
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Método**: GET
- **Delay**: 5 segundos (simulación de carga)
- **Interfaz TypeScript**: Tipado completo de datos de usuario

## 📱 Responsive Design

La aplicación está optimizada para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🤝 Contribución

Este proyecto fue desarrollado como parte de una práctica universitaria para la materia de Aplicaciones Móviles.

## 📄 Licencia

Este proyecto es de uso académico y educativo.

## 🆘 Ayuda Adicional

Para obtener más ayuda sobre Angular CLI, usa `ng help` o consulta la [Documentación Oficial de Angular CLI](https://angular.io/cli).
