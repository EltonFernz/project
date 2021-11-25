<?php
$connection = new mysqli("localhost", "root", "", "ehr");
session_start();
$checkId = $_POST['checkId'];
$sql3 = "select * from patientfam_details where f_id='$checkId'";
$result3 = mysqli_query($connection, $sql3);
$counter = mysqli_num_rows($result3);
if ($counter == 0 ) {
	$res = array('status' => 'error', 'message' => 'No Customers Found');
}else{
    $getdata = array();
	while($row = mysqli_fetch_assoc($result3)){
        $pid=$row['fam_pid'];
	$fname = $row['fam_fname'];
	$lname=$row['fam_lname'];
    $gender = $row['fam_gender'];
	$dob = $row['fam_dob'];
	$address= $row['fam_address'];
    $city=$row['fam_city'];
    $phoneno=$row['fam_phoneno'];
    $description=$row['fam_symptoms'];
    $appointment=$row['fam_appointmentDT'];
    $jdata = array("pid"=>$pid,"cid"=>$checkId,"fname"=>$fname,"lname"=>$lname,"gender"=>$gender,"dob"=>$dob,"address"=>$address,"city"=>$city,"phoneno"=>$phoneno,"description"=>$description,"appointment"=>$appointment);
    array_push($getdata, $jdata);    
    }
    $res = array('status' => 'success', 'message' => 'Success', 'data' => $getdata);
}
echo json_encode($res);
?>