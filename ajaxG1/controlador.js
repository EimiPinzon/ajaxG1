

let botonServicio = document.getElementById("boton");

botonServicio.addEventListener('click',consumirServicio);

let parrafo1=document.getElementById("parra1");
let parrafo2=document.getElementById("parra2");
let parrafo3=document.getElementById("parra3");
let parrafo4=document.getElementById("parra4");
let parrafo4=document.getElementById("parra5");
let parrafo4=document.getElementById("parra6");


function consumirServicio(){

    let superHeroe={
        nombre:"Peter parker",
        cedula:"234567890",
        rh:"Azúl",
        telefono:"34568998 línea hot",
        direccion:"cr 45 57-87",
        cargo:"gerente"
    }

    

    parrafo1.textContent="Peter parker";
    parrafo2.textContent="234567890";
    parrafo3.textContent="Azúl";
    parrafo4.textContent="34568998 línea hot";
    parrafo5.textContent="cr 45 57-87";
    parrafo6.textContent="gerente";


}