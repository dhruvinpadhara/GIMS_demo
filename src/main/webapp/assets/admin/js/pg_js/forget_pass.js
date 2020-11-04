
function save(){
	
	var mobile=$('#mobile').val();
	
	$.ajax({
		url : 'forget_pass.db',
		method : 'POST',
		data : {"mobile_number":mobile},
		success : function(ret){
			if (ret.input) {
				/*swal("Good", "Success Fully", "success");*/
				$('#data').html("mobile_number found").addClass("text-success");
				window.location.href="otp.db";
				return true;
			}else{
				$('#data').html("mobile_number not found pl enter correct number").addClass("text-danger");
			}
		}
	});
}