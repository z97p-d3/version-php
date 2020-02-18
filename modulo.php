<?php

    function getCiudad(){
    return json_decode( file_get_contents( __DIR__.'/data-1.json'), $assoc= true);
    



}

?>