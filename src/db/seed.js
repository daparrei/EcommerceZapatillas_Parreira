import db from "./db.js";
import { collection, addDoc } from "firebase/firestore";

const productos = [
  {
    "id": "1",
    "categoria": "Hombre",
    "nombre": "Chalpa",
    "precio": 52000,
    "imagen": "img/Chalpa.webp",
    "descripcion": "Renovamos el Chalpa, un calzado liviano que ofrece confort y durabilidad.",
    "alt": "Zapatilla Topper Chalpa para hombre, color negro",
    "talle": [38, 39, 40, 41],
    "stockPorTalle": {
      "38": 5,
      "39": 8,
      "40": 10,
      "41": 6
    }
  },
  {
    "id": "2",
    "categoria": "Hombre",
    "nombre": "Enforcer",
    "precio": 83000,
    "imagen": "img/Enforcer.webp",
    "descripcion": "Enforcer es la renovación de un clásico con estilo urbano aportando máximo comfort.",
    "alt": "Zapatilla Topper Enforcer para hombre, estilo urbano",
    "talle": [38, 39, 40, 41, 42, 43, 44],
    "stockPorTalle": {
      "38": 4,
      "39": 6,
      "40": 9,
      "41": 7,
      "42": 5,
      "43": 3,
      "44": 2
    }
  },
  {
    "id": "3",
    "categoria": "Hombre",
    "nombre": "Split",
    "precio": 49000,
    "imagen": "img/Split.webp",
    "descripcion": "Un calzado de running pensado en minimizar el peso y optimizar la amortiguación.",
    "alt": "Zapatilla Topper Split para hombre, running y amortiguación",
    "talle": [38, 39, 40, 41, 42, 43, 44],
    "stockPorTalle": {
      "38": 6,
      "39": 8,
      "40": 10,
      "41": 9,
      "42": 6,
      "43": 4,
      "44": 2
    }
  },
  {
    "id": "4",
    "categoria": "Mujer",
    "nombre": "Liss",
    "precio": 69000,
    "imagen": "img/Liss.webp",
    "descripcion": "El modelo LISS es un concepto femenino muy liviano.",
    "alt": "Zapatilla Topper Liss para mujer, diseño liviano",
    "talle": [35, 36, 37, 38, 39, 40, 41],
    "stockPorTalle": {
      "35": 4,
      "36": 6,
      "37": 8,
      "38": 10,
      "39": 7,
      "40": 5,
      "41": 3
    }
  },
  {
    "id": "5",
    "categoria": "Mujer",
    "nombre": "Terre",
    "precio": 69900,
    "imagen": "img/Terre.webp",
    "descripcion": "En Topper tenemos historia, y por eso lanzamos Terre.",
    "alt": "Zapatilla Topper Terre para mujer, modelo clásico",
    "talle": [35, 36, 37, 38, 39, 40, 41],
    "stockPorTalle": {
      "35": 5,
      "36": 7,
      "37": 9,
      "38": 8,
      "39": 6,
      "40": 4,
      "41": 2
    }
  },
  {
    "id": "6",
    "categoria": "Mujer",
    "nombre": "Squat",
    "precio": 55900,
    "imagen": "img/Squat.webp",
    "descripcion": "Entrenamiento y moda se conjugan en este nuevo diseño de producto.",
    "alt": "Zapatilla Topper Squat para mujer, entrenamiento y moda",
    "talle": [35, 36, 37, 38, 39, 40, 41],
    "stockPorTalle": {
      "35": 6,
      "36": 8,
      "37": 10,
      "38": 9,
      "39": 7,
      "40": 5,
      "41": 3
    }
  },
  {
    "id": "7",
    "categoria": "Niños",
    "nombre": "Circus",
    "precio": 55000,
    "imagen": "img/Circus.webp",
    "descripcion": "Circus Kids es una zapatilla muy trendy, super comoda y funcional.",
    "alt": "Zapatilla Topper Circus para niños, cómoda y funcional",
    "talle": [29, 30, 31, 32, 33, 34, 35],
    "stockPorTalle": {
      "29": 5,
      "30": 7,
      "31": 8,
      "32": 10,
      "33": 9,
      "34": 6,
      "35": 4
    }
  },
  {
    "id": "8",
    "categoria": "Niños",
    "nombre": "Hyde",
    "precio": 52900,
    "imagen": "img/Hyde.webp",
    "descripcion": "Esta zapa con mucho glitter es todo lo que vas a necesitar para brillar a diario.",
    "alt": "Zapatilla Topper Hyde para niños, con glitter",
    "talle": [29, 30, 31, 32, 33, 34, 35],
    "stockPorTalle": {
      "29": 4,
      "30": 6,
      "31": 8,
      "32": 9,
      "33": 7,
      "34": 5,
      "35": 3
    }
  },
  {
    "id": "9",
    "categoria": "Niños",
    "nombre": "X-Force",
    "precio": 70500,
    "imagen": "img/Force.webp",
    "descripcion": "Diseñado para el uso diario e intensivo, ideal para uso colegial.",
    "alt": "Zapatilla Topper X-Force para niños, uso diario y escolar",
    "talle": [29, 30, 31, 32, 33, 34, 35],
    "stockPorTalle": {
      "29": 6,
      "30": 8,
      "31": 10,
      "32": 9,
      "33": 7,
      "34": 5,
      "35": 3
    }
  }
]

const seedPrductos = async () => {
  try {
    const collectionRef = collection(db, "productos"); 
    //Guardar todos los productos en Firestore menos el id, que se genera automáticamente
    for (const producto of productos) {
      const { id, ...productoData } = producto; 
      await addDoc(collectionRef, productoData);
    }   
    console.log("Productos agregados exitosamente");
    } catch (error) {
        console.error("Error al agregar productos: ", error);
    }   
};

seedPrductos();
