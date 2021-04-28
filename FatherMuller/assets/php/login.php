<?php
$connection=new mysqli("localhost","root","","ehr" );   
session_start();
$data = 0;
if (isset($_POST['userid']) && isset($_POST['pass'])) {

    $userid = trim($_POST['userid']);
    $password = md5($_POST['pass']);
    $Query = mysqli_query($connection, "SELECT * FROM login WHERE username = '$userid'  AND password = '$password'");
    $row =  mysqli_fetch_assoc($Query);
    if ($row == true) {
        $dbPassword = $row['password'];
        $dbuserid = $row['username'];
        if ($password == $dbPassword) {
            $_SESSION['username'] = $userid;
            $_SESSION['password'] = $password;
            $data = (array('status' => 'success', 'message' => 'Logged in!' ));
        } else {
            $data = (array('status' => 'passwordError', 'message' => 'Your Password is incorrect!'));
        }
    } else {
        $data = (array('status' => 'emailError', 'message' => 'Your email or phone is incorrect! Check again'));
    }
}
echo json_encode($data);
?>  