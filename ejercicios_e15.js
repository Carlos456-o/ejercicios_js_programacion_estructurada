

function busquedaLineal(arr, valor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      return i; // devuelve el índice donde se encontró
    }
  }
  return -1; // si no se encuentra, devuelve -1
}

let numeros = [8, 3, 19, 5, 2];
console.log(busquedaLineal(numeros, 18)); // 2
console.log(busquedaLineal(numeros, 7)); // -1


function busquedaBinaria(arr, valor) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    // Comparar el valor del medio con el buscado
    if (arr[medio] === valor) {
      return medio;
    } else {
      // Si el valor del medio es menor que el buscado, buscar en la mitad derecha
      if (arr[medio] < valor) {
        inicio = medio + 1;
      } else {
        // Si el valor del medio es mayor que el buscado, buscar en la mitad izquierda
        fin = medio - 1;
      }
    }
  }

  // Si no se encuentra el valor, devolver -1
  return -1;
}

let numeros2 = [2, 5, 8, 10, 15, 26];
console.log(busquedaBinaria(numeros2, 10)); // 3
console.log(busquedaBinaria(numeros2, 7)); // -1


let medio = Math.floor((inicio + fin) / 2);


function busquedaLineal(arr, valor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      return i; // Índice encontrado
    }
  }
  return -1; // No se encontró
}

let letras1 = ["a", "c", "d", "f", "g"];
console.log(busquedaLineal(letras1, "f")); // 3
console.log(busquedaLineal(letras1, "z")); // -1



function busquedaBinaria(arr, valor) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === valor) {
      return medio;
    } else {
      if (arr[medio] < valor) {
        inicio = medio + 1; // buscar en la derecha
      } else {
        fin = medio - 1; // buscar en la izquierda
      }
    }
  }

  return -1;
}

let letras = ["a", "b", "c", "d", "e", "f"];
console.log(busquedaBinaria(letras, "d")); // 3
console.log(busquedaBinaria(letras, "z")); // -1


"a" < "b" // true
"c" > "b" // true
"apple" < "banana" // true

let palabras = ["manzana", "pera", "banana", "uva"];
palabras.sort(); // ["banana", "manzana", "pera", "uva"]

arr[i].toLowerCase() === valor.toLowerCase()

const productos = [
{ id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1200, stock: 10 },
{ id: 2, nombre: "Celular", categoria: "Electrónica", precio: 800, stock: 25 },
{ id: 3, nombre: "Teclado", categoria: "Accesorios", precio: 50, stock: 100 },
{ id: 4, nombre: "Mouse", categoria: "Accesorios", precio: 30, stock: 150 },
{ id: 5, nombre: "Monitor", categoria: "Electrónica", precio: 300, stock: 20 },
{ id: 6, nombre: "Silla Gamer", categoria: "Muebles", precio: 250, stock: 5 },
{ id: 7, nombre: "Escritorio", categoria: "Muebles", precio: 400, stock: 8 },
{ id: 8, nombre: "Audífonos", categoria: "Accesorios", precio: 70, stock: 60 },
{ id: 9, nombre: "Tablet", categoria: "Electrónica", precio: 600, stock: 12 },
{ id: 10, nombre: "Impresora", categoria: "Electrónica", precio: 200, stock: 15 },
{ id: 11, nombre: "Cámara", categoria: "Electrónica", precio: 1000, stock: 7 },
{ id: 12, nombre: "Smartwatch", categoria: "Electrónica", precio: 250, stock: 18 },
{ id: 13, nombre: "Parlante", categoria: "Accesorios", precio: 120, stock: 30 },
{ id: 14, nombre: "Microondas", categoria: "Electrodomésticos", precio: 180, stock: 12 },
{ id: 15, nombre: "Refrigeradora", categoria: "Electrodomésticos", precio: 900, stock: 4 },
{ id: 16, nombre: "Lavadora", categoria: "Electrodomésticos", precio: 700, stock: 6 },
{ id: 17, nombre: "Secadora", categoria: "Electrodomésticos", precio: 650, stock: 3 },
{ id: 18, nombre: "Cafetera", categoria: "Electrodomésticos", precio: 90, stock: 25 },
{ id: 19, nombre: "Ventilador", categoria: "Electrodomésticos", precio: 60, stock: 40 },
{ id: 20, nombre: "Licuadora", categoria: "Electrodomésticos", precio: 110, stock: 22 },
{ id: 21, nombre: "Cama", categoria: "Muebles", precio: 800, stock: 2 },
{ id: 22, nombre: "Ropero", categoria: "Muebles", precio: 500, stock: 3 },
{ id: 23, nombre: "Estufa", categoria: "Electrodomésticos", precio: 750, stock: 5 },
{ id: 24, nombre: "Horno", categoria: "Electrodomésticos", precio: 400, stock: 6 },
{ id: 25, nombre: "Lámpara", categoria: "Accesorios", precio: 45, stock: 50 },
{ id: 26, nombre: "Router", categoria: "Electrónica", precio: 130, stock: 20 },
{ id: 27, nombre: "Disco Duro", categoria: "Electrónica", precio: 150, stock: 35 },
{ id: 28, nombre: "Memoria USB", categoria: "Accesorios", precio: 25, stock: 200 },
{ id: 29, nombre: "Cargador", categoria: "Accesorios", precio: 35, stock: 90 },
{ id: 30, nombre: "Proyector", categoria: "Electrónica", precio: 600, stock: 4 }
];




//Crea una función que reciba un arreglo de objetos y busque un producto por nombre (por ejemplo, "Monitor"), usando búsqueda lineal.
function buscarProductoPorNombre(arr, nombre) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nombre.toLowerCase() === nombre.toLowerCase()) {
      return arr[i]; // devuelve el producto encontrado
    }
  }
  return null; // si no se encuentra, devuelve null
}

//Crea una función que reciba un arreglo de objetos y busque todos los productos de una categoría específica (por ejemplo, "Electrodomésticos"),usando búsqueda lineal.
function buscarProductosPorCategoria(arr, categoria) {
  let resultados = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].categoria.toLowerCase() === categoria.toLowerCase()) {
      resultados.push(arr[i]); // agrega el producto encontrado al arreglo de resultados
    }
  }
  return resultados; // devuelve el arreglo de productos encontrados
}

//Crea una función que reciba un arreglo de objetos y busque un producto con un precio exacto (por ejemplo, 600), usando búsqueda lineal.
function buscarProductoPorPrecio(arr, precio) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].precio === precio) {
      return arr[i]; // devuelve el producto encontrado
    }
  }
  return null; // si no se encuentra, devuelve null
}

//Crea una función que reciba un arreglo de objetos y busque todos losproductos cuyo precio esté dentro de un rango (por ejemplo, entre 100 y500), usando búsqueda lineal.
function buscarProductosPorRangoPrecio(arr, precioMin, precioMax) {
  let resultados = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].precio >= precioMin && arr[i].precio <= precioMax) {
      resultados.push(arr[i]); // agrega el producto encontrado al arreglo de resultados
    }
  }
  return resultados; // devuelve el arreglo de productos encontrados
}



//Crea una función que reciba un arreglo de objetos y busque los productos con stock menor a un valor dado (por ejemplo, 10), usando búsquedalineal.
function buscarProductosBajoStock(arr, stockMax) {
  let resultados = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].stock < stockMax) {
      resultados.push(arr[i]); // agrega el producto encontrado al arreglo de resultados
    }
  }
  return resultados; // devuelve el arreglo de productos encontrados
}
//Crea una función que reciba un arreglo de objetos y busque un producto por su ID usando búsqueda binaria (el arreglo debe estar ordenado por id).
function buscarProductoPorId(arr, id) {
  let inicio = 0;
  let fin = arr.length - 1;
  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
//Crea una función que reciba un arreglo de objetos y busque un producto por precio usando búsqueda binaria (el arreglo debe estar ordenado por precio).
    if (arr[medio].id === id) {
      return arr[medio]; // devuelve el producto encontrado
    } else if (arr[medio].id < id) {
      inicio = medio + 1; // buscar en la derecha
    } else {
      fin = medio - 1; // buscar en la izquierda
    }
  }
  return null; // si no se encuentra, devuelve null
}
//Crea una función que reciba un arreglo de objetos y busque un producto por nombre usando búsqueda binaria (el arreglo debe estar ordenado alfabéticamente por nombre).
function buscarProductoPorNombreBinario(arr, nombre) {
  let inicio = 0;
  let fin = arr.length - 1;
  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    if (arr[medio].nombre.toLowerCase() === nombre.toLowerCase()) {
      return arr[medio]; // devuelve el producto encontrado
    } else if (arr[medio].nombre.toLowerCase() < nombre.toLowerCase()) {
      inicio = medio + 1; // buscar en la derecha
    } else {
      fin = medio - 1; // buscar en la izquierda
    }
  }
  return null; // si no se encuentra, devuelve null
}

//Crea una función que reciba un arreglo de objetos y compare el tiempo de ejecución entre búsqueda lineal y binaria al buscar un mismo producto.
function compararTiemposBusqueda(arr, nombre) {
  console.time("Búsqueda Lineal");
  let resultadoLineal = buscarProductoPorNombre(arr, nombre);
  console.timeEnd("Búsqueda Lineal");
  console.time("Búsqueda Binaria");
  let resultadoBinario = buscarProductoPorNombreBinario(arr, nombre);
  console.timeEnd("Búsqueda Binaria");
  return { resultadoLineal, resultadoBinario };
}

//Crea una función que reciba un arreglo de objetos y verifique si un producto con un nombre dado existe o no en el arreglo, devolviendo true o false (búsqueda lineal).
function existeProducto(arr, nombre) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nombre.toLowerCase() === nombre.toLowerCase()) {
      return true; // el producto existe
    }
  }
  return false; // el producto no existe
}
 