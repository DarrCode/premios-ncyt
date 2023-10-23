# premios-ncyt

## Requisitos Previos

- Node.js
- npm

## Pasos para levantar el proyecto en entorno local

1. Clona el repositorio en tu máquina local:
2. Navega hasta el directorio del proyecto:
3. Instala las dependencias del proyecto: npm install
4. Inicia el servidor de desarrollo: npm run serve
5. Abre tu navegador y ve a la siguiente URL: http://localhost:8080

## Paso para desplegar el proyecto en entorno de producción

1. Compila el proyecto para producción: npm run build
2. Se generará una carpeta llamada `dist` en el directorio del proyecto.
3. Copia todos los archivos de la carpeta `dist` a tu servidor de producción.
4. Configura tu servidor para que apunte al directorio donde copiaste los archivos de `dist`.
5. Reinicia tu servidor web.
6. Ahora deberías poder acceder al proyecto en tu entorno de producción.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
