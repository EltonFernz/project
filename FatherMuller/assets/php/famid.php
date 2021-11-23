<?php
$connection=new mysqli("localhost","root","","ehr" );   
session_start();

$sql1 = "SELECT f_id from patientfam_details ORDER by fam_cid desc LIMIT 1";
$result1 = mysqli_query($connection, $sql1);
$counter = mysqli_num_rows($result1);
if ($counter == 0 ) {
	$fid=1;
    $jdata = array('fid'=>$fid);
	$res = array('status' => 'success', 'message' => 'Success', 'data' => $jdata);
}else{
	$row = mysqli_fetch_assoc($result1);
	$fid=$row['f_id'];
    $fam_id=(int)substr($fid,1);
    $fid=$fam_id+1;
	//$pat_id ="P".$pid;

    $jdata = array('fid'=>$fid);
	$res = array('status' => 'success', 'message' => 'Success', 'data' => $jdata);
}
echo json_encode($res);
