const listaDeContactos = [
  {
    id: 1,
    nombres: "Juan",
    apellidos: "Perez",
    telefono: "123-456-7890",
    ubicaciones: [
      { ciudad: "Ciudad1", direccion: "Dirección1" },
      { ciudad: "Ciudad2", direccion: "Dirección2" }
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

function agregarContacto(lista, contacto) {
  lista.push(contacto);
  console.log(`Contacto '${contacto.nombres} ${contacto.apellidos}' agregado con éxito.`);
}

function borrarContacto(lista, id) {
  const indice = lista.findIndex(contacto => contacto.id === id);
  if (indice !== -1) {
    const contactoEliminado = lista.splice(indice, 1)[0];
    console.log(`Contacto '${contactoEliminado.nombres} ${contactoEliminado.apellidos}' eliminado con éxito.`);
  } else {
    console.log(`El contacto con ID ${id} no se encontró en la lista.`);
  }
}

function actualizarContacto(lista, id, nuevoDatos) {
  const contactoExistente = lista.find(contacto => contacto.id === id);
  if (contactoExistente) {
    Object.assign(contactoExistente, nuevoDatos);
    console.log(`Contacto '${contactoExistente.nombres} ${contactoExistente.apellidos}' actualizado con éxito.`);
  } else {
    console.log(`El contacto con ID ${id} no se encontró en la lista.`);
  }
}

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

const idAActualizar = 1; 
const nuevosDatos = {
  nombres: "NuevoNombre",
  apellidos: "NuevoApellido",
  telefono: "999-999-9999",
  ubicaciones: [
    { ciudad: "NuevaCiudad", direccion: "NuevaDireccion" }
  ]
};

actualizarContacto(listaDeContactos, idAActualizar, nuevosDatos);

// lista de contactos actualizada
imprimirContactos(listaDeContactos);
