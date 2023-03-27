$(document).ready(function(){
	// $("#username").blur(function(){
	// 	if($(this).val()==""){
	// 		$(this).css("border","1px solid red");
	// 		$("#username").focus();
	// 		return false;
	// 	}
	// 	else{
	// 		$(this).css("border","1px solid green");
	// 	}
	// })

	
	$("#save").click(function(){
		if($("#Name").val()==""){
			$("#Name").css("border","1px solid red");
			$("#Name").focus();
			return false;
		}
		else{
			$("#Name").css("border","1px solid green");
		}
		if($("#Email Id").val()==""){
			$("#Email Id").css("border","1px solid red");
			$("#Email Id").focus();
			return false;
		}
		else{
			$("#Email Id").css("border","1px solid green");
		}
		if($("#Contact No").val()==""){
			$("#Contact No").css("border","1px solid red");
			$("#Contact No").focus();
			return false;
		}
		else{
			$("#Contact No").css("border","1px solid green");
		}
		if($("#Password").val()==""){
			$("#Password").css("border","1px solid red");
			$("#Password").focus();
			return false;
		}
		else{
			$("#Password").css("border","1px solid green");
		}
		$.ajax({
			type:"POST",
			url:"php/register.php",
			dataType:"json",
			//data:{"uname":Username,"pass":Password},
			data:$("#loginForm").serialize(),
			success:function(res){
				if(res.status=="Done"){
					window.location="login.html";
				}
			}

		})
	})
})