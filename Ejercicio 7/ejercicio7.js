const boton = document.querySelector("#boton");
const lista = document.querySelector("#lista");
const listaDeTareas = document.querySelector("#lista-de-tareas");

boton.onclick = async () => {
  document.body.style.height = "fit-content";
  document.querySelector(".container").style.flexDirection = "row";
  lista.style.width = "30%";
  lista.style.margin = "70px 0 0 0";
  boton.style.display = "none";
  const consultaUsuarios = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const consultaTareas = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (consultaUsuarios.ok && consultaTareas.ok) {
    const listaUsuarios = await consultaUsuarios.json();
    const listaTareas = await consultaTareas.json();
    let listaIDs = [];

    listaUsuarios.forEach((persona) => {
      let nuevaPersona = document.createElement("li");
      let botonTareas = document.createElement("button");

      botonTareas.id = persona.id;
      listaIDs.push(persona.id);

      nuevaPersona.innerHTML = `<strong>ID: ${persona.id}, ${persona.name}</strong>`;
      lista.appendChild(nuevaPersona);
      botonTareas.innerHTML = "Ver tareas";
      botonTareas.className = "boton-tareas";
      nuevaPersona.appendChild(botonTareas);
      nuevaPersona.innerHTML = `${nuevaPersona.innerHTML} <br>Correo: ${persona.email}, sitio web: <a href=# target=_BLANK>${persona.website}</a>`;
    });

    listaIDs.forEach((idBoton) => {
      document.getElementById(`${idBoton}`).onclick = () => {
        listaDeTareas.innerHTML = "";
        let tareas = listaTareas.filter((usuario) => usuario.userId == idBoton);

        listaDeTareas.innerHTML = `<h3>Tareas de ${
          listaUsuarios[idBoton - 1].name
        }</h3>`;
        tareas.forEach((tarea) => {
          let item = document.createElement("li");
          if (tarea.completed == true) {
            item.innerHTML = `<del>${tarea.title}</del>`;
          } else {
            item.innerHTML = tarea.title;
          }
          listaDeTareas.appendChild(item);
        });
      };
    });
  } else {
    console.log("ERROR!");
  }
};
