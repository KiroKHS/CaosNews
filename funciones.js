

function fncValidacion(){
    if(jQuery('#usuario').val()== "periodista1" && jQuery('#clave').val()== "clave1"){
        location.href="index.html";
        alert('la secion se a iniciado correctamente');
        return true;
    } 
    else if (jQuery('#usuario').val()== "moderador1" && jQuery('#clave').val()== "clave2") {
        location.href="administrador.html";
        alert('la secion se a iniciado correctamente');
        return true;
    } 
    else{
        alert('las credencialees son invalidas');
        return false;
    }
}

$(document).ready(function(){
    
    //Captura el botón
    var boton = $("#botonlogin");
    
//Captura el click del botón
    boton.click(function(){

        //Guardar los datos del input en variables
        var email = $("#usuario").val();
        var password = $("#clave").val();
        

        //Comparar datos con los de administrador
        if(email == "periodista1" && password == "12345"){
            location.href="index.html";
        }
        //Comparar datos con los de colaborador
        else if(email == "moderador1" && password == "12345"){
            location.href="administrador.html";

        }else{
            alert("contrasera o correo incorrecto!");
        }
    });
});