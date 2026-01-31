Entrega 2: Navega las rutas

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


PreEntrega 1 - Diego Parreira

Archivos para los componentes NavBar, CartWidget, e ItemListContainer, dentro de la carpeta components.[Ok]

Organización correcta de los mismos: NavBar e ItemListContainer serán renderizados en App, mientras que CartWidget será renderizado en NavBar.[OK]

Uso de props para enviar un string con un mensaje hacia el componente ItemListContainer. [Ok]

1) Se instalo react-icons/lu para el carrito de compras
2) Se instalo bootstrap para usar los estilos
3) Agregar Mostrar productos dinámicamente mediante una API Mock (https://69071d72b1879c890ed8d89d.mockapi.io/productos)


PreEntrega 2 - Diego Parreira

1) Corrijo logo del carrito

2) Agrego itemCard y ItemList

3) Genero formato para grilla de producto

4) Agrego imagenes de productos

