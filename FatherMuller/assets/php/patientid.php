<?php
$connection=new mysqli("localhost","root","","ehr" );   
session_start();

$sql1 = "SELECT MAX(`c_id`) AS MAXIMUM FROM patient_details";
$result1 = mysqli_query($connection, $sql1);
$counter = mysqli_num_rows($result1);
if ($counter == 0 ) {
	$res = array('status' => 'error', 'message' => 'No Patients Found');
}else{
	$row = mysqli_fetch_assoc($result1);
	$key='P';
	$pid=$row['MAXIMUM'];
    $pid=$pid+1;
	//$pat_id ="P".$pid;

    $jdata = array('pid'=>$pid);
	$res = array('status' => 'success', 'message' => 'Success', 'data' => $jdata);
}
echo json_encode($res);
