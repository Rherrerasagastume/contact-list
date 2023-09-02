const listaDeContactos = [
  {
    id: 1,
    nombres: "Juan",
    apellidos: "Perez",
    telefono: "9323-4562",
    ubicaciones: [
      { ciudad: "Tegucigalpa", direccion: "Dos cuadras despues de escula juan jose estrada" },
      { ciudad: "Comayagua", direccion: "Calle principal despues de Super la Colonia" }
    ]
  },
  {
    id: 2,
    nombres: "Maria",
    apellidos: "Lopez",
    telefono: "987-654-3210",
    ubicaciones: [
      { ciudad: "Ciudad3", direccion: "Dirección3" },
      { ciudad: "Ciudad4", direccion: "Dirección4" }
    ]
  }
];

// Función para añadir un nuevo contacto
function agregarContacto(lista, contacto) {
  lista.push(contacto);
  console.log(`Contacto '${contacto.nombres} ${contacto.apellidos}' agregado con éxito.`);
}

// Función para borrar un contacto existente
function borrarContacto(lista, id) {
  const indice = lista.findIndex(contacto => contacto.id === id);
  if (indice !== -1) {
    const contactoEliminado = lista.splice(indice, 1)[0];
    console.log(`Contacto '${contactoEliminado.nombres} ${contactoEliminado.apellidos}' eliminado con éxito.`);
  } else {
    console.log(`El contacto con ID ${id} no se encontró en la lista.`);
  }
}

// Función para imprimir los contactos en la lista
function imprimirContactos(lista) {
  console.log("Lista de contactos:");
  lista.forEach(contacto => {
    console.log(`ID: ${contacto.id}, Nombre: ${contacto.nombres} ${contacto.apellidos}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log("Ubicaciones:");
    contacto.ubicaciones.forEach(ubicacion => {
      console.log(`  Ciudad: ${ubicacion.ciudad}, Dirección: ${ubicacion.direccion}`);
    });
  });
}


imprimirContactos(listaDeContactos);

const nuevoContacto = {
  id: 3,
  nombres: "Laura",
  apellidos: "Martinez",
  telefono: "555-555-5555",
  ubicaciones: [
    { ciudad: "Ciudad5", direccion: "Dirección5" }
  ]
};

agregarContacto(listaDeContactos, nuevoContacto);

borrarContacto(listaDeContactos, 2);

imprimirContactos(listaDeContactos);
