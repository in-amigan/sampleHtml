function userLoggedIn($window){
	if($window.sessionStorage.getItem("user_type")!=undefined){
		return true;
	}else{
		return false;
	}
}

function adminLoggedIn($window){
	if($window.sessionStorage.getItem("user_email")!=undefined){
		return true;
	}else{
		return false;
	}
}