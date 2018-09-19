<?php

if(md5($_POST['passwd']) == "10deb4751b7a223002a9d81d67e39972") $res['status'] = "OK";
else $res['status'] = "KO";

echo json_encode($res);die; 




?>