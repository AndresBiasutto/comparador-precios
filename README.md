# La doña sabe (comparador de precios / price comparator)

<p align="center">
  <img src="https://github.com/AndresBiasutto/comparador-precios/blob/main/comparador-client/src/assets/LOGO.svg" width="400" height="400">
</p>

## 🇪🇸 Descripción
Aplicación creada para encontrar los precios más bajos entre las tiendas virtuales de las cadenas de supermercados más grandes de Argentina.

## 🇬🇧 Description
Application created to find the lowest prices among the online stores of the largest supermarket chains in Argentina.

## Tecnologías Utilizadas / Technologies Used
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

## Requisitos Previos / Prerequisites
- Node.js y npm instalados en tu máquina / Node.js and npm installed on your machine.
- MongoDB instalado o acceso a una instancia en la nube / MongoDB installed or access to a cloud instance.
- Un archivo `.env` configurado con las variables necesarias / A `.env` file configured with the necessary variables.

## Instalación / Installation

### Paso 1: Clonar el Repositorio / Step 1: Clone the Repository
```bash
git clone https://github.com/AndresBiasutto/comparador-precios
```

### Paso 2: Configurar Variables de Entorno / Step 2: Configure Environment Variables
Crea un archivo .env en la raíz del directorio comparador-api y añade las siguientes variables / Create a .env file in the root of the comparador-api directory and add the following variables:
```bash
DB_URI=mongodb+srv://comparaprecios294:(passwordAtlas)n@(userAtlas).jjjw0ig.mongodb.net/?retryWrites=true&w=majority&appName=comparadorPrecios
SECRET= "secretExample"
```

### Paso 3: Instalar Dependencias / Step 3: Install Dependencies
Navega hasta el directorio del proyecto y ejecuta / Navigate to the project directory and run:
```bash
cd comparador-precios
cd comparador-api
npm install
npm start
```
vuelve a el directorio raiz usando cd.. cd .. / return to the root directory using cd.. cd ..
```bash
cd comparador-precios
cd comparador-client
npm install
npm run dev
```



### Uso
Uso / Usage
Escribir en el buscador el nombre del producto que se desea comparar, tras realizar la búsqueda en cada tienda, devolverá una lista con los productos de cada una, en la cual se podrán comparar sus precios / Enter the name of the product you wish to compare in the search bar, after performing the search on each store, it will return a list with the products from each one, where you can compare their prices.

