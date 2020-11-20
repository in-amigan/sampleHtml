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
	try{
		$data = json_decode(file_get_contents("php://input"));
		if(isset($data->action) && $data->action == "saveUser"){
			$userName = $data->userfullname;
			$email = $data->email;
			$pass = $data->pass;
			$phone = $data->phone;

			$query = mysql_query("INSERT INTO `users` (`user_full_name`, `user_email`, `user_password`, `user_phone`) VALUES ('".$userName."', '".$email."', '".$pass."', '".$phone."');	") or die(mysql_error());

			if($query == true){
				$arr = array('msg' => "User created successfully", 'devmsg' => "data saved.", 'code' => 'success');
				echo json_encode($arr);
			}else{
				$arr = array('msg' => "Failed to save data. Please ask your administrator.", 'devmsg' => "Query failed.", 'code' => 'error');
				echo json_encode($arr);
			}

		}else if(isset($data->action) && $data->action == "loginUser"){
			$email = $data->email;
			$pass = $data->pass;

			$query = mysql_query("Select * from `users` where `user_email` = '".$email."' and `user_password` = '".$pass."';") or die(mysql_error());
			if(mysql_num_rows($query)==0){
				$arr = array('msg' => "Invalid Credentials", 'devmsg' => "query zero.", 'code' => 'error');
				echo json_encode($arr);
			}else{
				$firstrow = mysql_fetch_assoc($query);
				$arr = array('msg' => "login true", 'devmsg' => $firstrow, 'code' => 'success');
				echo json_encode($arr);
			}

		}else{
			$arr = array('msg' => "Failed to save data. Please ask your administrator.", 'devmsg' => "Invalid action Param.", 'code' => 'error');
			echo json_encode($arr);
		}

		
	}catch(Exception $e) {
		$arr = array('msg' => "Failed to save data. Please ask your administrator.", 'devmsg' => $e->getMessage(), 'code' => 'error');
		echo json_encode($arr);
	}
	
	
}

?>