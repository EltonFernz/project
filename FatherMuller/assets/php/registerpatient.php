<?php
$connection = new mysqli("localhost", "root", "", "ehr");
session_start();
$check = $_POST['check'];
if ($check == '1') {
  $pid = $_POST['pid'];
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $gender = $_POST['gender'];
  $dob = $_POST['birthday'];
  $adrs = $_POST['adrs'];
  $city = $_POST['cty'];
  $phone = $_POST['phne'];
  $symptoms = $_POST['sympt'];
  $appointment = $_POST['appDT'];

  $sql1 = "INSERT INTO `patient_details`(`c_id`, `fname`, `lname`, `gender`, `dob`, `address`, `city`, `phoneno`, `description`,`appointment`) VALUES ('$pid','$fname','$lname','$gender','$dob','$adrs','$city','$phone','$symptoms','$appointment')";
  $result1 = mysqli_query($connection, $sql1);
  if ($result1) {
    $res = array('status' => 'success', 'message' => 'Patient added Successfully!');
  } else {
    $res = array('status' => 'error', 'message' => 'There was an issue adding the patient! SERVER ERROR code:ADD');
  }
} else {
  $fid = $_POST['fid'];
  $arr = $_POST['arr'];
  $arr1 = $_POST['arr1'];
  $arr2 = $_POST['arr2'];
  $arr3 = $_POST['arr3'];
  $arr4 = $_POST['arr4'];
  $adrs = $_POST['adrs'];
  $city = $_POST['cty'];
  $phone = $_POST['phne'];
  $symptoms = $_POST['sympt'];
  $appointment = $_POST['appDT'];

  $sql2 = "INSERT INTO `patient_details`(`fid`, `fname`, `arr`, `arr1`, `arr2`, `arr3`,`arr4`, `city`, `phoneno`, `description`,`appointment`) VALUES ('$fid','$arr','$arr1','$arr2','$arr3','$arr4','$city','$phone','$symptoms','$appointment')";
  $result2 = mysqli_query($connection, $sql2);
  if ($result2) {
    $res = array('status' => 'success', 'message' => 'Patient added Successfully!');
  } else {
    $res = array('status' => 'error', 'message' => 'There was an issue adding the patient! SERVER ERROR code:ADD');
  }
}

