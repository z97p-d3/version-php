<?php
 class funciones{

public function cargarArchivos()
  {
    $contenido= file_get_contents("data-1.json");
    $con =utf8_encode($contenido);
    $datos =json_decode($con, true);
    $hay= count($datos["id"]);
    $id =$datos("id");
  }



}




?>