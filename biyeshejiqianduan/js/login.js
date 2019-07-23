function usernameV(){
	var usernameClass = document.getElementById("username")
	var password = document.getElementById("password");
	var val=usernameClass.value;
	if(val.length<6){
		alert("用户名不符合规范，请重新输入！");
	}
	if(password.value.length<5){
		alert("密码不符合规范，请重新输入！");
	}
}
