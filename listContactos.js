const listaDeContactos = [{ nombreApellido: "Juan Perez" }, { nombreApellido: "Maria Lopez" }];

// Función para añadir un nuevo contacto
function agregarContacto(lista, nombreApellido) {
  const nuevoContacto = { nombreApellido };
  lista.push(nuevoContacto);
  console.log(`Contacto '${nombreApellido}' agregado con éxito.`);
}

// Función para borrar un contacto existente
function borrarContacto(lista, nombreApellido) {
  const indice = lista.findIndex(contacto => contacto.nombreApellido === nombreApellido);
  if (indice !== -1) {
    lista.splice(indice, 1);
    console.log(`Contacto '${nombreApellido}' eliminado con éxito.`);
  } else {
    console.log(`El contacto '${nombreApellido}' no se encontró en la lista.`);
  }
}

// Función para imprimir los contactos en la lista
function imprimirContactos(lista) {
  console.log("Lista de contactos:");
  lista.forEach(contacto => {
    console.log(contacto.nombreApellido);
  });
}

imprimirContactos(listaDeContactos);
agregarContacto(listaDeContactos, "Laura Martinez");
borrarContacto(listaDeContactos, "Maria Lopez");
imprimirContactos(listaDeContactos);
