/* This code is not required for the animation. This is only needed for the repeatation */

$(function(){
	$('.repeat').click(function(){
    	var classes =  $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function(){
        	$(indicator).parent().addClass(classes);
        }, 20);
    });
});

function valida_titol(){
  var titol=document.getElementById("titol").value;
  if (titol.length>49){
    document.getElementById("error_titol").innerHTML="titol no vàlid";
    return false;
  }else{
    document.getElementById("error_titol").innerHTML="";
    return true;
  }
}
function valida_director(){
  var director=document.getElementById("director").value;
  if (director.length>28){
    document.getElementById("error_director").innerHTML="director no vàlid";
    return false;
  }else{
    document.getElementById("error_director").innerHTML="";
    return true;
  }
}
function valida_any(){
  var any=document.getElementById("any").value;
  if (any==""){
    document.getElementById("error_any").innerHTML="introdueixi numero any";
      return false;
  }
  else if (any > 1800 || any < 2999){
    document.getElementById("error_any").innerHTML="any no vàlida";
    return false;
  }else{// else no va mai amb condicions.IMPORTANT
    document.getElementById("error_any").innerHTML="";
    return true;
  }
  }
  function valida_pais(){
    var pais=document.getElementById("pais").value;
    if (pais.length>19){
      document.getElementById("error_pais").innerHTML="pais no vàlid";
      return false;
    }else{
      document.getElementById("error_pais").innerHTML="";
      return true;
    }
  }
  function valida_puntuacio(){
    var puntuacio=document.getElementById("puntuacio").value;
    if (puntuacio==""){
      document.getElementById("error_puntuacio").innerHTML="introdueixi puntuacio";
        return false;
    }
    else if (puntuacio < 0 || any > 10){
      document.getElementById("error_puntuacio").innerHTML="puntuacio no vàlida";
      return false;
    }else{// else no va mai amb condicions.IMPORTANT
      document.getElementById("error_puntuacio").innerHTML="";
      return true;
    }
    }
