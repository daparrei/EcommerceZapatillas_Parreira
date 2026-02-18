# Ecommerce de Zapatillas 

 Dentro de esta web vas a encontrar un proyecto creado en REACT en el cual vas a poder visuailzar productos, agregarlos a un carrito de compra y generar una Order de compra.


## Instalacion

Instrucciones de instalacion

Es necesario solictar el .env para tener acceso a la base de datos.

```
git clone https://github.com/daparrei/EcommerceZapatillas_Parreira
cd EcommerceZapatillas_Parreira
npm install
```

## Web deployadas

1. https://zapatillastopper.netlify.app/

2. https://ecommerce-zapatillas-parreira.vercel.app/

## Funcionlidades detalladas

NavBar
1. Tree las categorias de la base de datos.
2. Permite filtrado por categoria
3. Widget de carrito de compra para acceder
4. Solo muestra la cantidad agregada cuando hay productos en el carrito

Pantalla inicial/Home
1. Muestra la informacion de la foto, nombre del producto, descripcion y precio
2. Extrae todos los productos y los organizar en hasta 3 columnas dependiendo el tamaño de la pantalla.
2. Permite ingresar detalle del producto

Detalle del producto
1. Muestra nombre del producto, precio, descripcion y foto ampliada.
2. Muestra los talle disponibles segun el stock
3. Solo permite agregar al carrito cuando se seleciona 1 talle.
4. Solo permite agregar al carrito el stock que tiene disponible el talle seleccionado.
5. Cuando se agrega al carrito te cambia la visual y modifca el Widget de NavBar

Carrito de Compra
1. Muestra los items agregado al carrito con su nombre, cantidad, talle, Precio unitario y precio total de la linea.
2. Muestra un precio total todos los items
3. En caso de agregar el mismo producto y talle el mismo es sumado al item ya existe
4. Permite eliminar una linea de items
5. Permite Vacia el carrito completamente, agregando un boton para volver al home

# Entrega Final

Historial de desarrollo


1. Agrego informacion de contexto de CarContext[Done]

2. Agrego Carrito de compra [Done]

3. Agrego CarWidget con informacion de las cantidades compradas [Done]

4. Agregar componente para menejar el stock por talle.  [Done]

5. Sacar estilos de los componentes (ItemDetail, etc) []


# Entrega 2: Navega las rutas

Implementa una herramienta de routing, la cual permitirá navegar a través de las diferentes vistas para tu tienda: catálogo principal de productos, catálogo de productos filtrados por categorías, y vista en detalle de un producto. Crea la funcionalidad necesaria para que los usuarios puedan:

Seleccionar desde el menú las distintas categorías disponibles[Done]

Visualizar el listado, filtrando según esa elección. [Done]

Seleccionar un producto del listado y acceder a una vista en detalle del mismo, donde además contarán con una interfaz que posteriormente les permita agregar unidades al carrito. [Done al hacer click en comprar]

Objetivos

Implementar la funcionalidad de navegación entre las diferentes vistas utilizando enlaces y rutas. [Done]

Desarrollar la navegabilidad básica de la aplicación, permitiendo navegar desde el catálogo al detalle de cada item.[Done]

Requisitos

Implementación de React Router y creación de las distintas rutas necesarias para mostrar las vistas de nuestra app. [Done]

División entre componentes contenedores encargados de manejar el estado y los efectos (ItemListContainer, ItemDetailContainer) y componentes de presentación, encargados del apartado visual (estructura de elementos, estilos, classNames, etc.) [Done]

Los componentes contenedores harán un llamado asíncrono a "Promises" que resuelvan luego de un breve retardo los datos solicitados (listado de productos, un producto) [Se implemento un Fech a un api mock]

Uso del método Array.map() y la prop "key" para listar todos los productos en el catálogo. [Done]

Uso del hook useParams() de react router para leer el segmento actual de la URL y mostrar el contenido correspondiente. [Done en ItemListContainer ]

Recomendaciones

Crear una ruta de tipo “404” (path=”*”) es una buena práctica y te ayudará a encontrar errores de navegación y enlaces mal formateados. [Done]

Puedes incluir el componente contador ItemCount dentro del componente ItemDetail [Lista para implementar API de Stock]


# PreEntrega 1 - Diego Parreira

Archivos para los componentes NavBar, CartWidget, e ItemListContainer, dentro de la carpeta components.[Ok]

Organización correcta de los mismos: NavBar e ItemListContainer serán renderizados en App, mientras que CartWidget será renderizado en NavBar.[OK]

Uso de props para enviar un string con un mensaje hacia el componente ItemListContainer. [Ok]

1) Se instalo react-icons/lu para el carrito de compras
2) Se instalo bootstrap para usar los estilos
3) Agregar Mostrar productos dinámicamente mediante una API Mock (https://69071d72b1879c890ed8d89d.mockapi.io/productos)


