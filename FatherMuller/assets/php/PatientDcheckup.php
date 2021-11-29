<?php
$connection = new mysqli("localhost", "root", "", "ehr");
session_start();
$checkId = $_POST['checkId'];
$sql3 = "select * from patient_details where p_id='$checkId'";
$result3 = mysqli_query($connection, $sql3);
$counter = mysqli_num_rows($result3);
if ($counter == 0 ) {
	$res = array('status' => 'error', 'message' => 'No Customers Found');
}else{
	$row = mysqli_fetch_assoc($result3);
	$fname = $row['fname'];
	$lname=$row['lname'];
  $gender = $row['gender'];
	$dob = $row['dob'];
	$address= $row['address'];
  $city=$row['city'];
  $phoneno=$row['phoneno'];
  $description=$row['description'];
  $appointment=$row['appointment'];
$jdata = array("cid"=>$checkId,"fname"=>$fname,"lname"=>$lname,"gender"=>$gender,"dob"=>$dob,"address"=>$address,"city"=>$city,"phoneno"=>$phoneno,"description"=>$description,"appointment"=>$appointment);
$res = array('status' => 'success', 'message' => 'Success', 'data' => $jdata);
}

echo json_encode($res);
?>