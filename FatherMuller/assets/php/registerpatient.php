<?php
$connection=new mysqli("localhost","root","","ehr" );   
session_start();
$pid=$_POST['pid'];
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$gender=$_POST['gender'];
$dob=$_POST['birthday'];
$adrs=$_POST['adrs'];
$city=$_POST['cty'];
$phone=$_POST['phne'];
$symptoms=$_POST['sympt'];
$appointment=$_POST['appDT'];

$sql1="INSERT INTO `patient_details`(`c_id`, `fname`, `lname`, `gender`, `dob`, `address`, `city`, `phoneno`, `description`,`appointment`) VALUES ('$pid','$fname','$lname','$gender','$dob','$adrs','$city','$phone','$symptoms','$appointment')";
$result1 = mysqli_query($connection, $sql1);
if ($result1) {
  $res = array('status' => 'success', 'message' => 'Patient added Successfully!');
} else {
    $res = array('status' => 'error', 'message' => 'There was an issue adding the patient! SERVER ERROR code:ADD');
}

echo json_encode($res);