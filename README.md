# La doña sabe (comparador de precios)

(https://github.com/AndresBiasutto/comparador-precios/blob/main/comparador-client/src/assets/LOGO.svg){: style="display: block; margin-left: auto; margin-right: auto; width: 400px; height: 400px;"}


## Descripción
Aplicación creada para encontrar los precios más bajos entre las tiendas virtuales de las cadenas de supermercados más grandes de argentina.

## Tecnologías Utilizadas
- HTML
- CSS
- JavaScript
- React
- Redux
- Node.js
- Express
- Mongoose
- MongoDB
- Puppeteer

## Requisitos Previos
- Node.js y npm instalados en tu máquina.
- MongoDB instalado o acceso a una instancia en la nube.
- Un archivo `.env` configurado con las variables necesarias.

## Instalación

### Paso 1: Clonar el Repositorio
```bash
git clone https://github.com/AndresBiasutto/comparador-precios
```

### Paso 2: Configurar Variables de Entorno
Crea un archivo .env en la raíz del directorio comparador-api y añade las siguientes variables:
```bash
DB_URI=mongodb+srv://comparaprecios294:(passwordAtlas)n@(userAtlas).jjjw0ig.mongodb.net/?retryWrites=true&w=majority&appName=comparadorPrecios
SECRET= "secretExample"
```

### Paso 3: Instalar Dependencias
Navega hasta el directorio del proyecto y ejecuta:
```bash
cd comparador-precios
cd comparador-api
npm install
npm start
```
vuelve a el directorio raiz usando cd.. cd ..
```bash
cd comparador-precios
cd comparador-client
npm install
npm run dev
```



### Uso
Escribir en el buscador el nombre del producto que se desea comparar, tras realizar la búsqueda en cada tienda, devolverá una lista con los productos de cada una, en la cual se podrán comparar sus precios

