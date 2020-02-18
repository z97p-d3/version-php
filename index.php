<?php
include('crear_datos.php');








?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">


  <link type="text/css" rel="stylesheet" href="css/customColors.css"  media="screen,projection"/>
  <link type="text/css" rel="stylesheet" href="css/ion.rangeSlider.css"  media="screen,projection"/>
  <link type="text/css" rel="stylesheet" href="css/ion.rangeSlider.skinFlat.css"  media="screen,projection"/>

  <link type="text/css" rel="stylesheet" href="css/index.css"  media="screen,projection"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Formulario</title>
</head>

<body>
  <video src="img/video.mp4" id="vidFondo"></video>

  <div class="contenedor">
    <div class="card rowTitulo">
      <h1>Buscador</h1>
    </div>
    <div class="colFiltros col s12 m12">
      <form action="modulo.php" method="post" id="formulario">
        <div class="filtrosContenido ">
          <div class="tituloFiltros">
            <h5>Realiza una búsqueda personalizada</h5>
          </div>
         
          <div class="filtroCiudad input-field">
        
            <label for="selectCiudad">Ciudad:</label>
          
            <select name="tipo" id="selectTipo">
            <option value="0" disabled selected>Choose your option</option>
            <?php foreach($ventas as $venta ){ ?>
              <option value="<?php echo $venta['Ciudad'] ?>" selected><?php echo $venta['Ciudad'] ?></option>
              <?php }?>
            </select>

          </div>
         
       
          <div class="filtroTipo input-field">
            <label for="selecTipo">Tipo:</label>
         
            <select name="tipo" id="selectTipo1">
         
     
            <?php 
            $array=$ventas['Tipo'];
            $array_temp_fixed = array();
            $array_press_fixed = array();
            $array_fixed = array();
            
            ?>
              <?php foreach($array as $key => $value){ 
                if (!empty($value["Tipo"]) && !in_array($value["Tipo"], $array_temp_fixed)){
                  $array_temp_fixed[] = $value["Tipo"];
                  $array_fixed[] = $value;
              }
      
                
                ?>

  
        <option value="<?php print_r( $array_fixed); ?>" selected><?php print_r( $array_fixed);  ?></option>    
              <?php } ?>
            
             
            
          
            </select>
          </div>
          <div class="filtroPrecio">
            <label for="rangoPrecio">Precio:</label>
            <input type="text" id="rangoPrecio" name="precio" value="" />
          </div>
          <div class="botonField">
            <input type="submit" class="btn white" value="Buscar" id="submitButton" onclick="enviarDatos()">
          </div>
          <i class="fas fa-fan"></i>
          <span></span>
        </div>
      </form>
    </div>
    

    <div class="colContenido">
      <div class="tituloContenido card">
        <h5>Resultados de la búsqueda:</h5>
        <div class="divider"></div>
        <button type="button" name="todos" class="btn-flat waves-effect" id="mostrarTodos">Mostrar Todos</button>
      </div>

      <div class="lista">
      
 
   

        
      
      </div>
     


    



    </div>




 
  </div>






    


    </div>




  
  </div>


  <script type="text/javascript" src="js/jquery-3.0.0.js"></script>
  <script type="text/javascript" src="js/ion.rangeSlider.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script type="text/javascript" src="js/index.js"></script>
  <script src="https://kit.fontawesome.com/b161cdc429.js" crossorigin="anonymous"></script>
</body>
</html>
