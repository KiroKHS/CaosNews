

function fncValidacion(){
    if(jQuery('#usuario').val()== "periodista1" && jQuery('#clave').val()== "clave1"){
        location.href ="index.html";
        return true;
    } 
    else if (jQuery('#usuario').val()== "moderador1" && jQuery('#clave').val()== "clave2") {
        location.href ="index.html";
        return true;
    } 
    else{
        alert('las credeencialees son invalidas');
        return false;
    }
}