$.getJSON("PHP/pellicules_list.php",function(films){//php llegeix com un jason
  console.log(films);

  for (var f = 0; f < films.length; f++) {//recorrer array
    var titol=films[f]["titol"];
    var director=films[f]["director"];
   var cideres=""
        if(films[f]["puntuacio"]==0){cideres="<img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>"}
    else if(films[f]["puntuacio"]==1){cideres="<img src=img/stars/star_half.png><img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>"}
    else if(films[f]["puntuacio"]==2){cideres="<img src=img/stars/star_half.png><img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>"}
    else if(films[f]["puntuacio"]==3){cideres="<img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>"}
    else if(films[f]["puntuacio"]==4){cideres="<img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_half.png><img src=img/stars/star_on.png><img src=img/stars/star_off.png>"}
    else if(films[f]["puntuacio"]==5){cideres="<img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>"}
    else if(films[f]["puntuacio"]==6){cideres="<img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png>"}
    else if(films[f]["puntuacio"]==7){cideres="<img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png>"}
    else if(films[f]["puntuacio"]==8){cideres="<img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png>"}
    else if(films[f]["puntuacio"]==9){cideres="<img src=img/stars/star_half.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png>"}
    else if(films[f]["puntuacio"]==10){cideres="<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_off.png>"}





    document.getElementById('llistat-films').innerHTML +=//Id creada al html. Important
    "<div class=llistatrefilms>"+// creem class per poder treballar al css.

      "<h3>"+films[f]["titol"]+"</h3>"+//apuntem totes les dades que necessitem.

     "<img src=img/covers/"+films[f]["image"]+".jpg />"+

    /*  "<p>"+"https://www.google.com/search?q="+" <br> "+"<h4>"+*/ films[f]["any"]+"</h4>"+
       "<br>"+"<h4>"+films[f]["director"]+"</h4>"+ "<h4>"+films[f]["pais"]+"</h4>"+ films[f]["puntuacio"]+"</p>"+
       cideres+
      "<a target=_blank href='https://www.google.cat/search?q="+titol+" "+director+"'>+info</a>";+


    "</div>";

  }

});
