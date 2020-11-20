<?php
error_reporting(0);
include 'dbCon.php';

header("Content-type: application/json");
$verb = $_SERVER["REQUEST_METHOD"];
// handle a GET 
if ($verb == "GET") {
	$arr = array();
	$query = mysql_query("select * from daily_rates ") or die("ooho");
	$index = 0;
	while($row = mysql_fetch_assoc($query)) // loop to give you the data in an associative array so you can use it however.
	{
		$arr[$index] = $row;
		$index++;
	}
	echo json_encode($arr);
} else if ($verb == "POST") {
	try{
		$data = json_decode(file_get_contents("php://input"));
		if($data->rate_id != null){
			$query = mysql_query("update daily_rates set sell_price = '".$data->sell_price."', purchase_price = '".$data->purchase_price."' where rate_id = ".$data->rate_id."") or die(mysql_error());
			if($query == true){
				$arr = array('msg' => "Rates updated successfully", 'devmsg' => "data saved.", 'code' => 'success');
				echo json_encode($arr);
			}else{
				$arr = array('msg' => "Failed to save data. Please ask your administrator.", 'devmsg' => "Query failed.", 'code' => 'error');
				echo json_encode($arr);
			}
		}else{
			$arr = array('msg' => "Failed to save data. Please refresh page and try again.", 'devmsg' => "rate_id not defined.", 'code' => 'error');
			echo json_encode($arr);
		}

		
	}catch(Exception $e) {
		$arr = array('msg' => "Failed to save data. Please ask your administrator.", 'devmsg' => $e->getMessage(), 'code' => 'error');
		echo json_encode($arr);
	}
}

?>