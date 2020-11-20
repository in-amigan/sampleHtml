<?php
error_reporting(0);
include 'dbCon.php';
header("Content-type: application/json");
$verb = $_SERVER["REQUEST_METHOD"];
// handle a GET 
if ($verb == "GET") {	
	$arr = array();
	$query = mysql_query("select * from daily_rates ") or die(mysql_error());
	$index = 0;
	while($row = mysql_fetch_assoc($query)) // loop to give you the data in an associative array so you can use it however.
	{
		$arr[$index] = $row;
		$index++;
	}
	echo json_encode($arr);
} else if ($verb == "POST") {
	$funDate = $_POST['funDate'];
	$funTime = $_POST['funTime'];
	$funHall = $_POST['funHall'];
	$sofa = $_POST['sofa'];
	$design = $_POST['design'];
	$color = $_POST['color'];
	$others = $_POST['others'];
	$custName = $_POST['custName'];
	$query = mysql_query("INSERT INTO `qadri` (`SOFA`, `DESIGN`, `COLOUR`, `PLACE`, `OTHER`, `FUNCTION_DATE`, `FUNCTION_TIME`, `CUSTOMER_NAME`) VALUES ('".$sofa."', '".$design."', '".$color."', '".$funHall."', '".$others."', '".$funDate."', '".$funTime."', '".$custName."');
		") or die(mysql_error());

	echo $query;

}

?>