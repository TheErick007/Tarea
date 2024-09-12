<?php

    class page_controller {

        function index(){
            include_once(__DIR__ . '/../view/header.php');
            include_once(__DIR__ . '/../view/main.php');
            include_once(__DIR__ . '/../view/footer.php');


        }


        function carta() {
            include_once(__DIR__ . '/../view/header.php');
            include_once(__DIR__ . '/../view/loteria.php');
            include_once(__DIR__ . '/../view/footer.php');
        }
    }

?>