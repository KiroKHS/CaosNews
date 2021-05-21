// //+++++++++++++++++++++++++++++++++clima+++++++++++++++++++++++++++++++++++++++

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        JQuery('#geo').html('la localizacion no  se puede conseguir.');
    }
}

function showPosition(position){
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    var linkAPI = 'http://api.weatherapi.com/v1/current.json?key=261a3397a09c419cb67155250211405&q=';
    var url = linkAPI +latitud +','+longitud;
    jQuery.getJSON(url , 
    function(data){
        jQuery('#geo').html(' <b>Clima:</b> '+data.location.name+': '+data.current.temp_c+'°c ');
    });
}

jQuery(document).ready(function(){
    getLocation();
});



// ++++++++++++++++++++++ validar usuario+++++++++++++++++++++++++++++++++++++++

// function fncValidacion(){
//     if(jQuery('#usuario').val()== "periodista1" && jQuery('#clave').val()== "clave1"){
//         location.href="index.html";
//         alert('la secion se a iniciado correctamente');
//         return true;
//     } 
//     else if (jQuery('#usuario').val()== "moderador1" && jQuery('#clave').val()== "clave2") {
//         location.href="administrador.html";
//         alert('la secion se a iniciado correctamente');
//         return true;
//     } 
//     else{
//         alert('las credencialees son invalidas');
//         return false;
//     }
// }

// ++++++++++++++++++++++ validar usuario+++++++++++++++++++++++++++++++++++++++
$(document).ready(function(){
    
    //Captura el botón
    var boton = $("#boton");
    
//Captura el click del botón
    boton.click(function(){

        //Guardar los datos del input en variables
        var email = $("#usuario").val();
        var clave = $("#clave").val();
        
        //Comparar datos con los de administrador
        if(email == "periodista1" && clave == "12345"){
            
            alert("inicado correctamente");
        }
        //Comparar datos con los de colaborador
        else if(email == "moderador1" && clave == "12345"){
            location.href="administrador.html";
            alert('hola administrador')

        }else{
            alert("contrasera o correo incorrecto!");
        }
    });
});