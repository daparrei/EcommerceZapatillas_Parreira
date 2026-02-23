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

5. Sacar estilos de los componentes (ItemDetail, etc) [Done]


Entrega final:

 Web App de e-commerce
Desarrolla el Front End de una Single Page Application de e-commerce, utilizando React como herramienta base para crear las distintas piezas (componentes) de la interfaz de usuario (UI). Implementa los diferentes patrones y conceptos específicos de React, como el Virtual DOM y los hooks. Para la interacción entre las mismas, incorpora manejo de eventos, navegación entre componentes, y administración de datos globales (por ejemplo: el estado del carrito de compras). Como herramienta de estilado podrás utilizar de forma opcional CSS, SASS, o librerías de estilos (Bootstrap) o de componentes (Material UI). Podrás seleccionar una temática a elección, creando tu propio catálogo de productos, o utilizando herramientas generadoras de datos o "mock data".Implementa la conexión a un servicio en la nube (Firebase) que te provea de una Base de Datos donde almacenar el listado de tus productos, y te permita guardar registros de las compras realizadas por los usuarios del e-commerce.

Objetivos
Desarrollar el front-end de una webapp de tipo e-commerce con React.

Incorporar Firestore como base de datos.

Requisitos
Listado y Detalle de productos [DONE]
Generación dinámica del listado de productos y acceso a la vista en detalle de cada uno (ItemListContainer y ItemDetailContainer) [DONE]

Separación en componentes contenedores y de presentación para separar responsabilidad de tareas en los mismos. (ItemListContainer
ItemList) [DONE]


Implementación de componente ItemCount que permita seleccionar cantidad de unidades a agregar al carrito y realice las validaciones necesarias (valor mínimo, límite por stock, etc.) [DONE]

Ocultar el componente ItemCount en ItemDetail luego de agregar un producto al carrito. [DONE]

Navegación
Navegación entre las secciones de catálogo, categorías, detalle, carrito y checkout, utilizando React Router y mediante enlaces en el componente NavBar. [DONE]

Navegación respetando el modelo Single Page App (sin que se generen recargas de la página del navegador) [DONE]

Criterios de compras
Almacenamiento del estado de carrito de compras mediante Context. [DONE]

Mostrar el contenido del carrito dentro del componente Cart (productos, cantidades, subtotales, totales, etc.) [DONE]

Mostrar un icono/imágen del carrito en el componente CartWidget. Debe mostrar el total de unidades agregadas al context [DONE]

Firebase
Implementación de Firestore como base de datos.[DONE]

Creación de una colección donde se almacene la información de todos los productos del e-commerce, y realizar las consultas desde React para mostrarlos en la app. [DONE]

Generación de un documento en Firestore al confirmar una compra, registrando los detalles de la misma. [DONE]

Experiencia de usuario
Utilizar renderizado condicional para mostrar loaders y mensajes condicionales, como “producto sin stock”, “carrito vacío”, etc. [PENDING]

Como finalización de la experiencia de usuario, brindarle al usuario el id (o detalles adicionales) de la orden generada en Firestore [DONE]

Respetar las convenciones y consignas del curso para los nombres de variables funciones, componentes. eventos, y arquitectura de carpetas/archivos.[DONE]

Crear un documento en formato markdown documentando brevemente el proyecto [DONE]

Estructura de Componentes recomendada
App [DONE]

NavBar [DONE]
CartWidget [DONE]


ItemListContainer [DONE]
ItemList [DONE]
Item [DONE]

ItemDetailContainer [DONE]
ItemDetail [DONE]
ItemCount [DONE]

Cart [DONE]
CartItem [DONE]


CheckoutForm [DONE]

Recomendaciones
Asegúrate de que tu repositorio no presenta errores y es público. Te aconsejamos clonarlo y realizar una instalación de cero para testear tu app y detectar posibles errores.

Otra forma de detectar fallas es realizar un deploy de tu proyecto en servicios gratuitos (ej: Vercel, Netlify).

Si utilizaste variables de entorno para ocultar tus credenciales de Firebase, envíalas a tu profesor cuando realices la entrega.

No es necesario que envíes el enlace a tu panel de Firestore: el mismo es visible solo para el usuario administrador (es decir, accediendo con tu cuenta de google)

Formato
Link al repositorio de GitHub con el nombre “ProyectoFinal+Apellido”  por ejemplo “ProyectoFinal+Fernandez”

Criterios de evaluación
Para la evaluación de tu Proyecto Final, tendremos en cuenta los siguientes criterios de evaluación.


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


