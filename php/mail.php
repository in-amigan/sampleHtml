<?php
error_reporting(0);
 
header("Content-type: application/json");
$verb = $_SERVER["REQUEST_METHOD"];
if ($verb == "GET") {	
	$arr = array();
	
	mail(to,subject,message,headers,parameters);

	$index = 0;
	while($row = mysql_fetch_assoc($query)) // loop to give you the data in an associative array so you can use it however.
	{
		$arr[$index] = $row;
		$index++;
	}
	echo json_encode($arr);
}

?>