<?php 

include('modulo.php');


//Archivo php para llamada AJAX. 
$ciudad = htmlspecialchars($_POST['ciudad']);
$tipo = htmlspecialchars($_POST['tipo']);
$precio = htmlspecialchars($_POST['precio']);

$pos = strpos($precio, ';');

$min = substr($precio, 0, $pos);
$max = substr($precio, $pos+1);

$file = fopen("data-1.json", "r") or die("No se puede abrir el archivo");

$json = fread($file, filesize('data-1.json'));
$data = json_decode($json, true);

//primer filtro de precios
$r = array();
foreach($data as $i){
    $p = $i['Precio'];
    $p = substr($p, strpos($p,'$')+1);
    $c = strpos($p,',');
    $p = substr($p,0,$c).substr($p,$c+1);
    if($p>=$min && $p<=$max){
        array_push($r, $i);
    }
}

$result = array();
if(!empty($ciudad) && !empty($tipo)){
    foreach($r as $e){
        if($e['Ciudad']==$ciudad && $e['Tipo']==$tipo){
            array_push($result, $e);
        }
    }
} elseif(!empty($ciudad)){
    foreach($r as $e){
        if($e['Ciudad']==$ciudad){
            array_push($result, $e);
        }
    }
} elseif(!empty($tipo)){
    foreach($r as $e){
        if($e['Tipo']==$tipo){
            array_push($result, $e);
        }
    }
} else {
    $result = $r;
}
$rjson = json_encode($result);




fclose($file);










?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   
    
<div class="card" style="width: 18rem;">
  <img src="img/home.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text"><?php  printf($rjson) ; ?></p>
  </div>
</div>
   
</body>
</html>

