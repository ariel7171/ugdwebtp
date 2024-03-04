


function validar() {

    var miformulario = document.forms["formulario"]
    let patronNombre = /^[a-zA-Z\s]{5,30}$/;

    let patronEmail = /^\S+@\S+\.\S+$/;
    let parrafo = document.getElementById("parrafo")


    let nombre = miformulario.nombre.value;
    let email = miformulario.gmail.value
    let apellido = miformulario.apellido.value;
    let mensaje = miformulario.mensaje.value



    if (patronNombre.test(nombre) && patronEmail.test(email) && patronNombre.test(apellido) && mensaje != "") {


        parrafo.innerText("datos ingresados correctamente")
        return true;




    } else if (nombre == "" || email == "" || apellido == "" || mensaje == "") {


        parrafo.innerText = "no deje espacios en blanco"
        return false;


    } else {
        parrafo.innerText = "verifique los datos"
        return false;
    }





}




const btn = document.getElementById("enviar")
btn.addEventListener("click", function comprobar() {
    patronNombre = /^[a-zA-Z\s]{5,30}$/;
    patronEmail = /^\S+@\S+\.\S+$/;
    let nombre2 = document.getElementById("nombre")
    let apellido2 = document.getElementById("apellido")
    let email2 = document.getElementById("gmail")
    let mensaje2 = document.getElementById("mensaje")

    if (!patronNombre.test(nombre2.value)) {

        nombre2.style.borderColor = "red"

    } if (!patronNombre.test(apellido2.value)) {
        apellido2.style.borderColor = "red"
    } if (!patronEmail.test(email2.value)) {
        email2.style.borderColor = "red"
    } if (mensaje2.value == "") {
        mensaje2.style.borderColor = "red"
    }

})






