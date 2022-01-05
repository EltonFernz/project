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
  $appointment = $_POST['appDT'];

  $sql1 = "INSERT INTO `patient_details`(`p_id`, `fname`, `lname`, `gender`, `dob`, `address`, `city`, `phoneno`,`appointment`) VALUES ('$pid','$fname','$lname','$gender','$dob','$adrs','$city','$phone','$appointment')";
  $result1 = mysqli_query($connection, $sql1);
  if ($result1) {
    $res = array('status' => 'success', 'message' => 'Patient added Successfully!');
  } else {
    $res = array('status' => 'error', 'message' => 'There was an issue adding the patient! SERVER ERROR code:ADD');
  }

} else {
  $famid = $_POST['fid'];
  $arr = $_POST['arr'];
  $arr1 = $_POST['arr1'];
  $arr2 = $_POST['arr2'];
  $arr3 = $_POST['arr3'];
  $arr4 = $_POST['arr4'];
  $adrs = $_POST['adrs'];
  $city = $_POST['cty'];
  $phone = $_POST['phne'];
  $fam_pid=$_POST['arrpid'];
  $fid=$famid;
  $appointment = $_POST['appDT'];
  for($i=0;$i<count($arr);$i++){
  $sql2 = "INSERT INTO `patientfam_details`(`f_id`,`fam_pid`, `fam_fname`, `fam_lname`, `fam_gender`, `fam_dob`, `fam_symptoms`, `fam_address`, `fam_city`, `fam_phoneno`, `fam_appointmentDT`) VALUES ('$fid','$fam_pid[$i]','$arr[$i]','$arr1[$i]','$arr2[$i]','$arr3[$i]','$arr4[$i]','$adrs','$city','$phone','$appointment')";
  $result2 = mysqli_query($connection, $sql2);
  if ($result2) {
    $res = array('status' => 'success', 'message' => 'Patient added Successfully!');
  } else {
    $res = array('status' => 'error', 'message' => 'There was an issue adding the patient! SERVER ERROR code:ADD');
  }
  }
}
echo json_encode($res);

