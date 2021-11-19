<?php
$connection = new mysqli("localhost", "root", "", "ehr");
session_start();
$checkId = $_POST['checkId'];
$sql3 = "select * from patient_details where c_id=$checkId";
$result3 = mysqli_query($connection, $sql3);
$jdata = mysqli_fetch_assoc($result3);
$data = array("cid"=>$jdata['c_id'],"fname"=>$jdata['fname'],"lname"=>$jdata['lname'],"gender"=>$jdata['gender'],"dob"=>$jdata['dob'],"address"=>$jdata['address'],"city"=>$jdata['city'],"phoneno"=>$jdata['phoneno'],"description"=>$jdata['description'],"appointment"=>$jdata['appointment']);
if ($result3) {
  $res = array('status' => 'success', 'message' => 'Patient added Successfully!', 'data' => $data);
} else {
  $res = array('status' => 'error', 'message' => 'There was an issue adding the patient! SERVER ERROR code:ADD'.mysqli_error($connection));
}

echo json_encode($res);
?>