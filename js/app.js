





function validar() {

    var miformulario = document.forms["formulario"]
    let patronNombre = /^[a-zA-Z\s]{5,30}$/;

    let patronEmail = /^\S+@\S+\.\S+$/;
    let parrafo = document.getElementById("parrafo")


    let nombre = miformulario.nombre.value;
    let email = miformulario.gmail.value
    let apellido = miformulario.apellido.value;
    let mensaje = miformulario.mensaje.value

    
    let td1=miformulario.nombre.value
    let td2=miformulario.apellido.value
    let td3=miformulario.gmail.value
   let td4=miformulario.mensaje.value
  
   

    if (patronNombre.test(nombre) && patronEmail.test(email) && patronNombre.test(apellido) && mensaje != "") {


        parrafo.innerText="datos ingresados correctamente"
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        
        table.appendChild(thead);
        table.appendChild(tbody);
        
        
        document.getElementById('body').appendChild(table);
        
        let tr1 = document.createElement('tr');
        let thead1 = document.createElement('th');
        thead1.innerHTML = 'nombre';
        let thead2 = document.createElement('th');
        thead2.innerHTML = 'apellido';
        let thead3 = document.createElement('th');
        thead3.innerHTML = 'gmail';
        let thead4 = document.createElement('th');
        thead4.innerHTML = 'mensaje';
        
        tr1.appendChild(thead1);
        tr1.appendChild(thead2);
        tr1.appendChild(thead3);
        tr1.appendChild(thead4);
        thead.appendChild(tr1);
        
        

   
   

  let array=[td1,td2,td3,td4];
  for(let i=0;i<array.length;i++){
      
    let tr2 = document.createElement('tr');
    let td2Nombre = document.createElement('td');
    td2Nombre.innerHTML = array[0]
    let td2Apellido = document.createElement('td');
    td2Apellido.innerHTML = array[1]
    let td2Gmail = document.createElement('td');
    td2Gmail.innerHTML = array[2]
    let td2Mensaje = document.createElement('td');
    td2Mensaje.innerHTML = array[3]
    tr2.appendChild(td2Nombre);
    tr2.appendChild(td2Apellido);
    tr2.appendChild(td2Gmail);
    tr2.appendChild(td2Mensaje);
    tbody.appendChild(tr2);
    
    
   
        
       }


        
       



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
 






