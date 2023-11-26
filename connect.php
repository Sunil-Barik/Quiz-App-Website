<?php
$name = $_POST['name'];
$password = $_POST['password'];

// Database connection

$con = new mysqli("localhost", "root", " quiz"); 
if($con->connect_error){
    die("Failed to connect : " .$con->connect_error);

}
else{

    $stmt =$con->prepare("select * from registration where name = ?");
    $stmt->bind_param("s",$name );
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    if($stmt_result->num_rows>0){
$data = $stmt_result->fetch_assoc();
if($data['password'] === $password){
    echo"<h2>Login Successfully</h2>";
    
}else{
    echo "<h2>Invalid name or password</h2>";
    }}
    else {
       echo "<h2>Invalid name or password</h2>" ;
    }

}
?>