<?php
    header("Content-Type: text/html;charset=utf-8");


    $con = mysql_connect("localhost:3306","root","root");
    // // echo $con;
    if(!$con){
        die("数据库连接失败" . mysql_error());
    };

    $phone = $_GET["phone"];
    $password = $_GET["password"];
    $email = $_GET["email"];
    $sex = $_GET["sex"];
    $years = $_GET["years"];
    $months = $_GET["months"];
    $days = $_GET["days"];
    // echo"$phone;$password"

    mysql_select_db("new_mysql",$con);

    $inster_query = "INSERT INTO converse
                    (phone,password,email,sex,years,months,days)
                    VALUE
                    ('$phone','$password','$email','$sex','$years','$months','$days')
                    ";
    $inster_res = mysql_query($inster_query);
    if(!$inster_res){
        die("连接失败");
    }

    mysql_close($con);
?>