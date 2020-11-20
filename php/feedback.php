<?php
error_reporting(0);
include 'dbCon.php';
header("Content-type: application/json");
$verb = $_SERVER["REQUEST_METHOD"];
// handle a GET 
if ($verb == "GET") {
	$arr = array();
	if(isset($_GET['q'])){
		$index = 0;
		if($_GET['q'] == "1"){
			$query = mysql_query("select * from feedback where approved = 1 order by approved desc, feed_id desc ") or die(mysql_error());
		}else{
			$query = mysql_query("select * from feedback order by approved desc, feed_id desc ") or die(mysql_error());
		}
		while($row = mysql_fetch_assoc($query)) // loop to give you the data in an associative array so you can use it however.
		{
			$arr[$index] = $row;
			$index++;
		}
		echo json_encode($arr);
	};
	
} else if ($verb == "POST") {
	try{
		$data = json_decode(file_get_contents("php://input"));
		if(isset($data->action) && $data->action == "saveFeedback"){
			$query = mysql_query("INSERT INTO `feedback` (`feed_name`, `feedback`) VALUES ('".$data->name."', '".$data->message."');") or die(mysql_error());
			if($query == true){
				$arr = array('msg' => "Message sent successfully", 'devmsg' => "data saved.", 'code' => 'success');
				echo json_encode($arr);
			}else{
				$arr = array('msg' => "Failed to sent. Please ask your administrator.", 'devmsg' => "Query failed.", 'code' => 'error');
				echo json_encode($arr);
			}
		}else if(isset($data->action) && $data->action == "updatefeed" && isset($data->idf)){
			$query = mysql_query("update feedback set feed_name = '".$data->name."', feedback = '".$data->message."', approved = 1 where feed_id = ".$data->idf.";") or die(mysql_error());
			if($query == true){
				$arr = array('msg' => "Message sent successfully", 'devmsg' => "data saved.", 'code' => 'success');
				echo json_encode($arr);
			}else{
				$arr = array('msg' => "Failed to sent. Please ask your administrator.", 'devmsg' => "Query failed.", 'code' => 'error');
				echo json_encode($arr);
			}
		}else if(isset($data->action) && $data->action == "deleteFeed" && isset($data->idf)){
			$query = mysql_query("delete from feedback where feed_id = ".$data->idf.";") or die(mysql_error());
			if($query == true){
				$arr = array('msg' => "Deleted successfully", 'devmsg' => "deleted.", 'code' => 'success');
				echo json_encode($arr);
			}else{
				$arr = array('msg' => "Failed to delete. Please ask your administrator.", 'devmsg' => "Query failed.", 'code' => 'error');
				echo json_encode($arr);
			}
		}
		

		

	}catch(Exception $e) {
		$arr = array('msg' => "Failed to save data. Please ask your administrator.", 'devmsg' => $e->getMessage(), 'code' => 'error');
		echo json_encode($arr);
	}
}

?>