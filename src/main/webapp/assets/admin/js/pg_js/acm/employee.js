var table='';
window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Employee_model",
            	columns : [ {
            		"data" : "emp_id"
            	},{
            		"data" : "name"
            	},{
            		"data" : "rid.rname"
            	},{
            		"data" : "username"
            	},{
            		"render": function (data, type, JsonResultRow, meta) {//mimage using for database model vastu
                        return '<img style = "height:100px;width:100px" src="assets/admin/image/employee/'+JsonResultRow.image+'">';
                    }
            	}
            	,{
            		"data" : "mobile_number"
            	},{
            		"data" : " "
            	} ],
            	columnDefs : [
            			{
            				"targets" : -1,
            				"data" : null,
            				"defaultContent" :'<div class="dropdown"> <button class="btn btn-primary dropdown-toggle" type="button" id="about-us" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action </button> <div class="dropdown-menu" aria-labelledby="about-us"> <a class="dropdown-item update1" id="update" data-toggle="modal" data-target="#add_form" >Edit</a> <a class="dropdown-item delete1" id="delete">Delete</a> </div>'
            			},
            			{
            				"targets" : [0],
            				"visible" : false,
            				"searchable" : false
            			}
            	],
            	"order" : [ [ 0, "desc" ] ],
            });	
	$('#sample tbody').on( 'click', '#update', function () { 
		var  data = table.row($(this).parents('tr')).data();
		console.log(data);
		var option=$('<option></option>');
		var option1=$('<option></option>');
		
		$('#city_id').html('');
		$('#area_id').html('');
		option.attr("value","");
		$('#city_id').append(option);
		$('#area_id').append(option1);
		$('#city_id option:first').html("select city");
		$('#area_id option:first').html("select area");
		
		//console.log(data);
		$('[name = "id"]').val(data["emp_id"]);
		$('[name = "username"]').val(data["username"]);
		$('[name = "password"]').val(data["password"]);
		$('#confirm').val(data["password"]);
		$('[name = "name"]').val(data["name"]);
		
		
		
		/*var dd=data["image"];
		console.log(dd);*/
		//$('#user_image').val(data["image"]);
		var gender=data["gender"];
		console.log(gender);
		$('[name = "gender"][value="'+gender+'"]').prop("checked","checked");
		
		$('#address').html(data["address"]);
		$('#address').attr("value",data["address"]);
		
		$('[name = "surname"]').val(data["surname"]);
		$('[name = "email"]').val(data["email"]);
		$('[name = "username"]').val(data["username"]);
		//$('[name = "age"]').val(data["age"]);

		$('[name = "mobile"]').val(data["mobile_number"]);
		var role1=data["rid"];
		var state1=data["sid"];
		var city1=data["cid"];
		var area1=data["aid"];
		
		var roleid=role1["rid"];  
		var rolename=role1["rname"];
		
		var stateid=state1["sid"];  
		var statename=state1["sname"];
		
		var cityid=city1["cid"];  
		var cityname=city1["cname"];
		
		var areaid=area1["aid"];  
		var areaname=area1["aname"];
		
		$('#role_id option:first').val(roleid).html(rolename); //this
		$('#role_id:first').attr('selected','selected');
		
		$('#state_id option:first').val(stateid).html(statename); //this
		$('#state_id:first').attr('selected','selected');
		
		$('#city_id option:first').val(cityid).html(cityname); //this
		$('#city_id:first').attr('selected','selected');
		
		$('#area_id option:first').val(areaid).html(areaname); //this
		$('#area_id:first').attr('selected','selected');
		
		
		//$("#user_image").val(data["image"]);
		//$('#view').attr("src","img/emp/"+data["image"]);
		var accc=$('#abcd').val(data["image"]);
		var str="img/emp/"+accc;
		$('#view').attr("src",str);
	});
	
	$('#sample tbody').on( 'click', '#delete', function () { 
		  var  data = table.row($(this).parents('tr')).data();

		  swal({
	            title: 'Are you sure?',
	            text: 'You won\'t be able to revert this!',
	            type: 'warning',
	            buttons: true,
	            dangerMode: true,
	            showCancelButton: true,
	            confirmButtonColor: '#00c0ef',
	            cancelButtonColor: '#ff8080',
	            confirmButtonText: 'Yes, delete it!'
	        }).then((willdelete)=>{
	        		if(willdelete){
	        			$.ajax({
		            		type:"POST",
		            		  url: "delete.db",
		            		  data:{'id':data["emp_id"],'fname':'emp_id','model':'Employee_model'},
		            		  dataType : "JSON",
		            		  success:function(data){
		            			  if (data.status) {
		            					table.ajax.reload();
		            					swal("Good", "Success Fully", "success");
		            					$('#add_form').modal('hide');
		            				} else {
		            					swal("sorry!", "successfully not inserted data!!", "error");
		            					$('#add_form').modal('hide');	
		            				} 
		            		  }
	        			});
	        		}
	        	else{
	        			swal("your data is not deleted")
	        	}
	        });	
		} );
	setTimeout( function(){ access1(); },500);
}

//set image source from 
//remove image source
function remo(){
	$("#user_image").val("");
	$('#view').attr("src","");
}


getdata();
function getdata() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'Role_model'},
		success:function(data)
		{
			$('#role_id').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',"").text("select Role");
			$('#role_id').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.rid).text(this.rname);           
				$('#role_id').append(option);
         	});
		}		
		
	});
	
}

state();
function state() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'State_model'},
		success:function(data)
		{
			$('#state_id').html('');
  			var optionf = $('<option/>');
			optionf.attr('value',"").text("select State");
			$('#state_id').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.sid).text(this.sname);           
				$('#state_id').append(option);
         	});
		}		
	});
}

function city(id) {
	$.ajax({
		url:'dmodelwithid.db',
		method:'POST',
		data: {'model':'City_model','fname':'sid','id' : id},
		success:function(data)
		{
			$('#city_id').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',"").text("select City");
			$('#city_id').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.cid).text(this.cname);           
				$('#city_id').append(option);
         	});
		}		
		
	});
	
}

function area(id) {
	$.ajax({
		url:'dmodelwithid.db',
		method:'POST',
		data: {'model':'Area_model','fname':'cid','id' : id},
		success:function(data)
		{
			$('#area_id').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',"").text("select Area");
			$('#area_id').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.aid).text(this.aname);           
				$('#area_id').append(option);
         	});
		}		
		
	});
	
}

function res(){
	$('#employee_form')[0].reset();
	$('#user_id').val(0);
	getdata();
	state();
	$('#view').attr('src',"");
	$('#address').html('');
	$('#address').attr("value",'');
	$('#add_form').modal('hide');
}

function show(){
	$('#add_form').modal('show');	
	var option=$('<option></option>');
	var option1=$('<option></option>');
	
	$('#city_id').html('');
	$('#area_id').html('');
	option.attr("value","");
	option1.attr("value","");
	$('#city_id').append(option);
	$('#area_id').append(option1);
	$('#city_id option:first').html("select city");
	$('#area_id option:first').html("select area");
}


function date_Data(){
	var date=$('#testing').val();
	$.ajax({
  		url:'get_date_data.db',
  		method:'POST',
  		data: {'model':'Employee_model','fname':'btime','value':date} ,
  		
  		success:function(data)
  		{
  			console.log("malyu");
  			console.log(data);
  			console.log("patyu");
  		}		
  	});
	alert(new Date());
}

function save(){
	var username=$('#username').val();
	var password=$('#password').val();
	var confirm=$('#confirm').val();
	var empname=$('#empname').val();
	var emp_email=$('#emp_email').val();
	var gender=$('[name="gender"]:checked');
	var udate=$('#udate').val();
	var mobile_number=$('#mobile_number').val();
	var role_id=$('#role_id').val();
	var user_image=$('#user_image').val();
	var address=$('#address').val();
	var state_id=$('#state_id').val();
	var city_id=$('#city_id').val();
	var area_id=$('#area_id').val();
	
	
	
	if(username==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter user name',
		    position: 'topRight'
		  });
		$('#username').focus();
		return false;
	}
	
	var regex=/^[a-zA-Z ]*$/;
	
	/*if(!regex.test(username)){
		iziToast.error({
		    title: 'validate fail!',
		    message: 'username,please enter String value',
		    position: 'topRight'
		  });
		$('#username').focus();
		return false;
	}*/
	
	if(password==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter password',
		    position: 'topRight'
		  });
		$('#password').focus();
		return false;
	}
	
	if(confirm==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter confirm password',
		    position: 'topRight'
		  });
		$('#confirm').focus();
		return false;
	}
	
	if(confirm!=password){
		iziToast.error({
		    title: 'not valid!',
		    message: 'please enter same password',
		    position: 'topRight'
		  });
		$('#confirm').focus();
		return false;
	}
	
	if(empname==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter employee name',
		    position: 'topRight'
		  });
		$('#empname').focus();
		return false;
	}
	
	if(!regex.test(empname)){
		iziToast.error({
		    title: 'validate fail!',
		    message: 'employee name,please enter String value',
		    position: 'topRight'
		  });
		$('#empname').focus();
		return false;
	}
	
	if(emp_email==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter email name',
		    position: 'topRight'
		  });
		$('#emp_email').focus();
		return false;
	}
		
  	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  				//^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (reg.test(emp_email) == false) 
      {
      	 iziToast.error({
   		    title: 'invalid email_id!',
   		    message: 'enter the particular email',
   		    position: 'topRight'
   		  });
      	 $('#emp_email').focus();
          return false;
      }
      
      console.log(gender);
      if(gender.length == 0){
		  iziToast.error({
		    title: 'Pl select gender!',
		    message: 'sdfsf',
		    position: 'topRight'
		  });
		  $('#gender').html('select gender').addClass("text-danger");
		  return false;
      }
      if(udate == ""){
		  iziToast.error({
		    title: 'Pl. enter date email_id!',
		    message: 'sdfsf',
		    position: 'topRight'
		  });
		  $('#udate').focus();
		  return false;
      }
      
      if(mobile_number == ""){
		  iziToast.error({
		    title: 'Pl. enter mobile_number!',
		    message: '',
		    position: 'topRight'
		  });
		  $('#mobile_number').focus();
		  return false;
      }
	
      var mnum=/^[0]?[789]\d{9}$/;
		if(mnum.test(mobile_number) == false){
			iziToast.error({
			 title: 'invalid mobile number!',
			 message: 'enter the particular number',
			 position: 'topRight'
			});
		$('#mobile_number').focus();
		return false;
		}
		
		
		if(role_id==""){
			iziToast.error({
			    title: 'required!',
			    message: 'please select state name',
			    position: 'topRight'
			  });
			$('#role_id').focus();
			return false;
		}
		
		if(user_image==""){
			iziToast.error({
			    title: 'required!',
			    message: 'please select user_image',
			    position: 'topRight'
			  });
			$('#user_image').focus();
			$('#uimage').html("select image").addClass('text-danger')
			return false;
		}
		
		var limage=$('#uimage');
		if(limage.html()!=null){
			limage.html('');
		}
		
		if(address==""){
			iziToast.error({
			    title: 'required!',
			    message: 'please enter address',
			    position: 'topRight'
			  });
			$('#address').focus();
			return false;
		}
		
		if(state_id==""){
			iziToast.error({
			    title: 'required!',
			    message: 'please select state',
			    position: 'topRight'
			  });
			$('#state_id').focus();
			return false;
		}
		
		if(city_id==""){
			iziToast.error({
			    title: 'required!',
			    message: 'please select city',
			    position: 'topRight'
			  });
			$('#city_id').focus();
			return false;
		}
		
		if(area_id==""){
			iziToast.error({
			    title: 'required!',
			    message: 'please select area',
			    position: 'topRight'
			  });
			$('#area_id').focus();
			return false;
		}

		
		
	var form_data = new FormData();
	
	var file_data = $('#user_image').prop('files')[0];
	var other_data = $('#employee_form').serializeArray();
	$.each(other_data , function(key ,input) {
		form_data.append(input.name , input.value);
		console.log(input.name+ " "+ input.value);
	});
	
	form_data.append('image',file_data);
	
	$.ajax({
		url : 'employee.db',
		method : 'POST',
		cache : false,
		contentType : false,
		processData : false,
		data : form_data,
		dataType : "JSON", 
		success : function(res) {
			if (res.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				$('#employee_form')[0].reset();
				$('#user_id').val(0);
				getdata();
				state();
				$('#view').attr('src',"");
				$('#address').html('');
				$('#address').attr("value",'');
				$('#add_form').modal('hide'); 
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				res();
			}
		}
	});
}
