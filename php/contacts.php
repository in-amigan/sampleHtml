<?php
error_reporting(0);
include 'dbCon.php';
header("Content-type: application/json");
$verb = $_SERVER["REQUEST_METHOD"];
// handle a GET 
if ($verb == "GET") {
	$arr = array();
	$query = mysql_query("select * from contact_messages order by message_id desc ") or die(mysql_error());
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

		$query = mysql_query("INSERT INTO `contact_messages` (`contact_name`, `contact_email`, `contact_phone`, `contact_message`) VALUES ('".$data->name."', '".$data->email."', '".$data->phone."', '".$data->message."');") or die(mysql_error());
		if($query == true){
			$arr = array('msg' => "Message sent successfully", 'devmsg' => "data saved.", 'code' => 'success');
			echo json_encode($arr);
		}else{
			$arr = array('msg' => "Failed to sent. Please ask your administrator.", 'devmsg' => "Query failed.", 'code' => 'error');
			echo json_encode($arr);
		}

	}catch(Exception $e) {
		$arr = array('msg' => "Failed to save data. Please ask your administrator.", 'devmsg' => $e->getMessage(), 'code' => 'error');
		echo json_encode($arr);
	}
}

?>