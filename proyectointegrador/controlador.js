let  boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault() 

    let cajausuariousuario=document.getElementById("cajausuario")
    let cajacorreocarreo=document.getElementById("cajacorreo")
    let cajaciudadciudad=document.getElementById("cajaciudad")
    let cajatelefono=document.getElementById("cajatelefono")
    let cajacontraseña=document.getElementById("cajacaontraseña")

    let datosDelFormulario={
        usuario:cajausuario.value,
        correo:cajacorreo.value,
        ciudad:cajaciudad.value,
        telefono:cajatelefono.value,
        contraseña:cajacontraseña.value,
    }
    
})