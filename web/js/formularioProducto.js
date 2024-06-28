
var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCantidad = /^\d+$/;
var regexDescripcion = /^[a-zA-Z0-9 ]+$/;
var regexPrecio = /^\d+$/;


var enviarDatos=0;

var nombre=document.getElementById("Nombre"); 
var mensajeNombre=document.getElementsByClassName("MensajeNombre")[0]
var circleCrossNombre=document.getElementsByClassName("circleCrossNombre")[0] 
var circleCheckNombre=document.getElementsByClassName("circleCheckNombre")[0]

var cantidad=document.getElementById("cantidad"); 
var mensajeCantidad=document.getElementsByClassName("mensajeCantidad")[0]
var circleCrossCantidad=document.getElementsByClassName("circleCrossCantidad")[0]
var circleCheckCantidad=document.getElementsByClassName("circleCheckCantidad")[0]

var descripcion=document.getElementById("descripcion"); 
var mensajeDescripcion=document.getElementsByClassName("mensajeDescripcion")[0]
var circleCrossDescripcion=document.getElementsByClassName("circleCrossDescripcion")[0]
var circleCheckDescripcion=document.getElementsByClassName("circleCheckDescripcion")[0]

var precio=document.getElementById("precio"); 
var mensajePrecio=document.getElementsByClassName("mensajePrecio")[0]
var circleCrossPrecio=document.getElementsByClassName("circleCrossPrecio")[0]
var circleCheckPrecio=document.getElementsByClassName("circleCheckPrecio")[0]



nombre.addEventListener("blur", ()=>{
    if (!regexNombre.test(nombre.value)) {
        mensajeNombre.classList.remove("ocultar")
        nombre.classList.add("Error")
        nombre.classList.remove("correcto")
        alert("Por favor, introduce un nombre válido.");
        circleCrossNombre.classList.remove("ocultar")
        circleCheckNombre.classList.add("ocultar")
  }
  else{
    mensajeNombre.classList.add("ocultar");
    nombre.classList.add("Error");
    nombre.classList.remove("Error")
    circleCheckNombre.classList.remove("ocultar")
    circleCrossNombre.classList.add("ocultar")


  }
});

cantidad.addEventListener("blur", ()=>{
  if (!regexCantidad.test(cantidad.value)) {
      mensajeCantidad.classList.remove("ocultar")
      cantidad.classList.add("Error")
      cantidad.classList.remove("correcto")
      alert("Por favor, introduce una cantidad válida.");
      circleCrossCantidad.classList.remove("ocultar")
      circleCheckCantidad.classList.add("ocultar")
}
else{
  mensajeCantidad.classList.add("ocultar");
  cantidad.classList.add("Error");
  cantidad.classList.remove("Error")
  circleCheckCantidad.classList.remove("ocultar")
  circleCrossCantidad.classList.add("ocultar")


}
});

descripcion.addEventListener("blur", ()=>{
  if (!regexDescripcion.test(descripcion.value)) {
      mensajeDescripcion.classList.remove("ocultar")
      descripcion.classList.add("Error")
      descripcion.classList.remove("correcto")
      alert("Por favor, introduce una descripcion válida.");
      circleCrossDescripcion.classList.remove("ocultar")
      circleCheckDescripcion.classList.add("ocultar")
}
else{
  mensajeDescripcion.classList.add("ocultar");
  descripcion.classList.add("Error");
  descripcion.classList.remove("Error")
  circleCheckDescripcion.classList.remove("ocultar")
  circleCrossDescripcion.classList.add("ocultar")


}
});

precio.addEventListener("blur", ()=>{
    if (!regexPrecio.test(precio.value)) {
        mensajePrecio.classList.remove("ocultar")
        precio.classList.add("Error")
        precio.classList.remove("correcto")
        alert("Por favor, introduce un precio válido.");
        circleCrossPrecio.classList.remove("ocultar")
        circleCheckPrecio.classList.add("ocultar")
  }
  else{
    mensajePrecio.classList.add("ocultar");
    precio.classList.add("Error");
    precio.classList.remove("Error")
    circleCheckPrecio.classList.remove("ocultar")
    circleCrossPrecio.classList.add("ocultar")


  }
});




var formulario=document.getElementById("formulario")
formulario.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log(enviarDatos)
  if(!regexNombre.test(nombre.value)){

  }else {
    formulario.submit();
  }
});

var formulario=getElementById("formulario");

formulario.addEventListener("submit", (e)=>{
  e.preventDefault();
  var avanzar=0;
  if (!regexNombre.test(nombre.value)) {
    mensajeNombre.classList.remove("ocultar")
    nombre.classList.add("Error")
    nombre.classList.remove("correcto")
    alert("Por favor, introduce un nombre válido.");
    circleCrossNombre.classList.remove("ocultar")
    circleCheckNombre.classList.add("ocultar")
}
else{
mensajeNombre.classList.add("ocultar");
nombre.classList.add("Error");
nombre.classList.remove("Error")
circleCheckNombre.classList.remove("ocultar")
circleCrossNombre.classList.add("ocultar")

}
if (avanzar==1) {
  formulario.submit();
} else{
  if (!regexCantidad.test(cantidad.value)) {
    mensajeCantidad.classList.remove("Ocultar")
    cantidad.classList.add("Error")
    cantidad.classList.remove("Correcto")
    alert("Introduce una cantidad  válida.");
    circleCrossCantidad.classList.remove("Ocultar")
    circleCheckCantidad.classList.add("Ocultar")
}
else{
mensajeCantidad.classList.add("ocultar");
cantidad.classList.add("Error");
cantidad.classList.remove("Error")
circleCheckCantidad.classList.remove("Ocultar")
circleCrossCantidad.classList.add("Ocultar")


}if (avanzar==1) {
  formulario.submit();
} else{
  if (!regexDescripcion.test(descripcion.value)) {
    mensajeDescripcion.classList.remove("Ocultar")
    descripcion.classList.add("Error")
    descripcion.classList.remove("correcto")
    alert("Introduce una descripcion válida.");
    circleCrossDescripcion.classList.remove("Ocultar")
    circleCheckDescripcion.classList.add("Ocultar")
}
else{
mensajeDescripcion.classList.add("Ocultar");
descripcion.classList.add("Error");
descripcion.classList.remove("Error")
circleCheckDescripcion.classList.remove("Ocultar")
circleCrossDescripcion.classList.add("Ocultar")


}}if (avanzar==1) {
  formulario.submit();
} else{
  if (!regexPrecio.test(precio.value)) {
    mensajePrecio.classList.remove("Ocultar")
    precio.classList.add("Error")
    precio.classList.remove("correcto")
    alert("Introduce un precio válido.");
    circleCrossPrecio.classList.remove("Ocultar")
    circleCheckPrecio.classList.add("Ocultar")
}
else{
mensajePrecio.classList.add("Ocultar");
precio.classList.add("Error");
precio.classList.remove("Error")
circleCheckPrecio.classList.remove("Ocultar")
circleCrossPrecio.classList.add("Ocultar")


}}if (avanzar==1) {
  formulario.submit();
}
}
});
