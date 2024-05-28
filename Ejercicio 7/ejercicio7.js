const boton = document.querySelector("#boton")

boton.onclick = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")

    if (respuesta.ok) {
        const personas = await respuesta.json()
        console.log(personas)
    } else {
        console.log("ERROR!")
    }

    //filter, map, foreach
}