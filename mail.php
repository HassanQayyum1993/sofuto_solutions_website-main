<?php 
if($_POST){
    $name = $_POST['first_name'];
    $email = $_POST['email'];

//send email
    mail("hassanqayyum11@gmail.com", "51 Deep comment from" .$email, $name);
}
?>