<?php
    $con = mysql_connect("localhost:3306","root","root");

    if(!$con){
        die('{"state":"error","errorType":"数据库错误","stateCode":"3"}');
    }

    mysql_select_db("new_mysql");

    header("Content-Type: text/html;charset=utf-8");

    $username = @$_REQUEST["loginID"];
    $password = @$_REQUEST["loginPas"];
    

    //验证用户名密码
    $select_query = "SELECT * FROM converse";
    $select_res = mysql_query( $select_query);


    $json_array = array();
    

    while($row = mysql_fetch_array($select_res)){
        array_push($json_array,$row);
        if($row["phone"] === $username && $row["password"] === $password){
            die('{"state":"success","errorType":"null","stateCode":"1"}');
        }
        // else{
        //     die('{"state":"error","errorType":"参数不全","stateCode":"2"}');
        // }
    }
    $json_array = json_encode($json_array);

    echo $json_array;

?>