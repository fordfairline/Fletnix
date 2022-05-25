<?php
  //dades de connexió
  $servidor = "filmoteca";
  $usuari = "fordfairline";
  $contrasenya = "12345";
  $basededades = "filmoteca";
  $taula = "pellicules";
  //si no s'ha passat pel formulari
  if ($_POST == null){
    header("Location: ..");
    die();
  }
  //simplifiquem variables S'han de sanititzar les dades!!!!
  $titol = $_POST["titol"];
  $director = $_POST["director"];
  $any = $_POST["any"];
  $pais = $_POST["pais"];
  $animacio = $_POST["animacio"];
  $catala = $_POST["catala"];
  $puntuacio = $_POST["puntuacio"];
  $observacions = $_POST["observacions"];
  //consulta
  //INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);
  $sql = "INSERT INTO $taula (titol, director, any, pais, puntuacio) VALUES ('$titol', '$director', '$any', '$pais', '$puntuacio')";
  $sql_id = "SELECT * FROM $taula ORDER BY id DESC LIMIT 1"; //per saber el nom de la imatge
  //fem la connexió
  $conn = new mysqli($servidor, $usuari, $contrasenya, $basededades);
  // comprovem la connexió
  if ($conn->connect_error) {
    return "Fallada en la connexió: ".$conn->connect_error;
    die();
  }
  //executem_consulta
  if ($conn->query($sql) === TRUE) {
    echo "Ok!";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  $resultat_id_nova = $conn->query($sql_id); //executem consulta per saber la ID que acabem d'afegir
  if ($resultat_id_nova->num_rows > 0) { //comprovem que el resultat no és 0
    while($fila = $resultat_id_nova->fetch_assoc()) {
      $img = $fila["id"]; //passem la puntuació 5 punts
    }
  }
  //pugem la imatge
  //dades del arhivo
  $ruta_desti = "../img/covers/$img.jpg";
  $tipus_arxiu = $_FILES['imatge']['type'];
  $tamany_arxiu = $_FILES['imatge']['size'];
  $tamany_max = 5242880;
  $ruta_temporal = $_FILES['imatge']['tmp_name'];
  //comprovo características
  if (!(strpos($tipus_arxiu, "jpeg")) && ($tamany_arxiu < $tamany_max)) {
     	echo "Extensió o tamany de la imatge incorrecte.";
  }else{
     	if (move_uploaded_file($ruta_temporal, $ruta_desti)){
        		echo "L'arxiu s'ha carregat correctament.";
            header("Location: ..");
            die();
     	}else{
        		echo "Error fatal al pujar l'arxiu.";
     	}
  }

$conn->close(); //tanquem la connexió amb la base de dades
?>
