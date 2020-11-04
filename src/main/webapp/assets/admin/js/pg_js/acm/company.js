var table='';

window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Company_model",
            	columns : [ {
            		"data" : "comp_id"
            	},{
            		"data" : "cname"
            	},{
            		"data" : "tax"
            	},{
            		"data" : "owner_name"
            	},{
            		"data" : "email"
            	},{
            		"data" : "mnumber1"
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
			
		var option=$('<option></option>');
		var option1=$('<option></option>');
		
		$('#city_id').html('');
		$('#area_id').html('');
		option.attr("value","");
		$('#city_id').append(option);
		$('#area_id').append(option1);
		$('#city_id option:first').html("select city");
		$('#area_id option:first').html("select area");
		
		var comp_id=data["comp_id"];
			$('[name="id"]').val(data["comp_id"]);
			
			var tdata=data["tax"];
			$('#tax_type option:first').val(tdata).html(tdata); //this
			$('#tax_type:first').attr('selected','selected');
			//console.log(data)
			
			$('[name="comp_name"]').val(data["cname"]);
			$('[name="owner_name"]').val(data["owner_name"]);
			$('[name="email"]').val(data["email"]);
			$('[name="mnumber1"]').val(data["mnumber1"]);
			$('[name="mnumber2"]').val(data["mnumber2"]);
			$('[name="webname"]').val(data["webname"]);
			
			$('#logo').text(data["logo_name"]);
			var state1=data["sid"];
			var city1=data["cid"];
			var area1=data["aid"];
			
			
			var stateid=state1["sid"];  
			var statename=state1["sname"];
			
			var cityid=city1["cid"];  
			var cityname=city1["cname"];
			
			var areaid=area1["aid"];  
			var areaname=area1["aname"];
			
			$('#state_id option:first').val(stateid).html(statename); //this
			$('#state_id:first').attr('selected','selected');
			
			$('#city_id option:first').val(cityid).html(cityname); //this
			$('#city_id:first').attr('selected','selected');
			
			$('#area_id option:first').val(areaid).html(areaname); //this
			$('#area_id:first').attr('selected','selected');
			
			$('#address').html(data["address"]);
			$('#address').attr("value",data["address"]);
			$('[name="zipcode"]').val(data["zipcode"]);
			$('[name="pan_number"]').val(data["pan"]);
			$('[name="gst_number"]').val(data["gst"]);
			$('[name="bank_name"]').val(data["bank_name"]);
			$('[name="account_number"]').val(data["account_number"]);
			$('[name="branch"]').val(data["branch"]);
			$('[name="ifsc_code"]').val(data["ifsc_code"]);
	
	});
	
	$('#sample tbody').on( 'click', '#delete', function () { 
		  var  data = table.row($(this).parents('tr')).data();

		  swal({
	            title: 'Are you sure?',
	            text: 'You won\'t be able to revert this!',
	            buttons: true,
	            dangerMode: true,
	            type: 'warning',
	            showCancelButton: true,
	            confirmButtonColor: '#00c0ef',
	            cancelButtonColor: '#ff8080',
	            confirmButtonText: 'Yes, delete it!'
	        }).then((willdelete)=>{
	        	if(willdelete){
	        		$.ajax({
	            		type:"POST",
	            		  url: "delete.db",
	            		  data:{'id':data["comp_id"],'fname':'comp_id','model':'Company_model'},
	            		  dataType : "JSON",
	            		  success:function(data){
	            			  if (data.status) {
	            					table.ajax.reload();
	            					swal("Good", "Success Fully", "success");
	            					$('#Role_model').modal('hide');
	            				} else {
	            					swal("sorry!", "successfully not inserted data!!", "error");

	            				} 
	            		  },
	        		});
	        	}else{
	        		swal('Your Data is safe!,not deleted');
	        	}
		} );
	});
	setTimeout( function(){ access1(); },500);
}

function remo(){
		$("#logo").val("");
		$('#view').attr("src","");
	}

function st(){
	$('#add_form').modal('hide');
	$('#st_form').modal('show');
}

function resst(){
	$('#st_form').modal('hide');
	$('#state_form')[0].reset();
	$('#add_form').modal('show');
}
function savest(){
var sname=$('#state_name').val();
	
	if(sname==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter the state name',
		    position: 'topRight'
		  });
		$('#state_name').focus();
		return false;
	}
	
	//var regex = /^[a-zA-Z][a-zA-Z\\s]+$/;
	var regex1=/^[a-zA-Z ]*$/;
	
	
	if(!regex1.test(sname)){
		iziToast.error({
		    title: 'validate fail!',
		    message: 'please enter String value',
		    position: 'topRight'
		  });
		$('#state_name').focus();
		return false;
	}
	$.ajax({
		url : 'state.db',
		method : 'POST',
		data : $('#state_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				$('#state_form')[0].reset();
				$('#st_form').modal('hide');
				$('#add_form').modal('show');
				state();
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#state_form')[0].reset();
				$('#st_form').modal('hide');
				$('#add_form').modal('show');
			}
		}
	});
}

function ct(){
	$('#add_form').modal('hide');
	$('#state_form')[0].reset();
	$('#ct_form').modal('show');
}

function resct(){
	$('#ct_form').modal('hide');
	$('#city_form')[0].reset();
	$('#add_form').modal('show');
}
function savect(){
	var state_id=$('#state_id2').val();
	var cname=$('#city_name').val();
	
	if(state_id==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please select state name',
		    position: 'topRight'
		  });
		$('#state_id2').focus();
		return false;
	}
	
	if(cname==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter city name',
		    position: 'topRight'
		  });
		$('#city_name').focus();
		return false;
	}
	
	var regex1=/^[a-zA-Z ]*$/;
	
	if(!regex1.test(cname)){
		iziToast.error({
		    title: 'validate fail!',
		    message: 'please enter String value',
		    position: 'topRight'
		  });
		$('#city_name').focus();
		return false;
	}
	
	$.ajax({
		url : 'city.db',
		method : 'POST',
		data : $('#city_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				$('#city_form')[0].reset();
				$('#ct_form').modal('hide');
				$('#add_form').modal('show');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#city_form')[0].reset();
				$('#city_id').val(0);
				$('#ct_form').modal('hide');
				$('#add_form').modal('show');
			}
		}
	});
}

function ar(){
	$('#add_form').modal('hide');
	$('#ar_form').modal('show');
}

function resar(){
	$('#ar_form').modal('hide');
	$('#area_form')[0].reset();
	$('#add_form').modal('show');
}

function savear(){
	var state_id=$('#state_id1').val();
	var city_id=$('#city_id1').val();
	var area_name=$('#area_name').val();
	var pincode=$('#pincode').val();
	
	if(state_id==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please select state name',
		    position: 'topRight'
		  });
		$('#state_id1').focus();
		return false;
	}
	
	if(city_id==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please select city name',
		    position: 'topRight'
		  });
		$('#city_id1').focus();
		return false;
	}
	
	if(area_name==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter area name',
		    position: 'topRight'
		  });
		$('#area_name').focus();
		return false;
	}
	
	var regex1=/^[a-zA-Z ]*$/;
	
	if(!regex1.test(area_name)){
		iziToast.error({
		    title: 'validate fail!',
		    message: 'please enter String value',
		    position: 'topRight'
		  });
		$('#area_name').focus();
		return false;
	}
	
	if(pincode==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter pincode',
		    position: 'topRight'
		  });
		$('#pincode').focus();
		return false;
	}
	
	var regex2=/^[1-9][0-9]{5}/;
	
	if(!regex2.test(pincode)){
		iziToast.error({
		    title: 'validate fail!',
		    message: 'please enter String value',
		    position: 'topRight'
		  });
		$('#pincode').focus();
		return false;
	}
	$.ajax({
		url : 'area.db',
		method : 'POST',
		data : $('#area_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				//$('#area_form')[0].reset();
				$('#ar_form').modal('hide');
				$('#add_form').modal('show');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				//$('#area_form')[0].reset();
				$('#ar_form').modal('hide');
				$('#add_form').modal('show');
			}
		}
	});
}

state();
function state(){
	$.ajax({
  		url:'dmodel.db',
  		method:'POST',
  		data: {'model':'State_model'} ,
  		
  		success:function(data)
  		{
  			$('.state').html('');
  			//append first show option
  			var optionf = $('<option/>');
				optionf.attr('value',"").text("select state");
				$('.state').append(optionf);
				
  			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.sid).text(this.sname);           
				$('.state').append(option);
         	});
  		}		
  	});
}


function check(id){
	$.ajax({
  		url:'dmodelwithid.db',
  		method:'POST',
  		data: {'model':'City_model','fname':'sid','id':id} ,
  		success:function(data)
  		{
  			$('.city').html('');
  			//append first show option
  				var optionf = $('<option/>');
				optionf.attr('value',"").text("select city");
				$('.city').append(optionf);
				
  			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.cid).text(this.cname);           
				$('.city').append(option);
         	});
  		}		
  	});
}

function check1(id){
	$.ajax({
  		url:'dmodelwithid.db',
  		method:'POST',
  		data: {'model':'Area_model','fname':'cid','id':id} ,
  		success:function(data)
  		{
  			$('#area_id').html('');
  			//append first show option
  			var optionf = $('<option/>');
				optionf.attr('value',0).text("select area");
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

function show(){
	$('#add_form').modal('show');
	$('#tax_type option:first').val("").html("select type");
	
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

function res(){
	$('#wizard_with_validation')[0].reset();
	$('#comp_id').val(0);
	state();
	$('#view').attr('src',"");
	$('#address').html('');
	$('#address').attr("value",'');
	$('#add_form').modal('hide');
}

function save(){
	
	var comp_name=$('#comp_name').val();
	var tax_type=$('#tax_type').val();
	var oname=$('#oname').val();
	var email=$('#email').val();
	
	var mnumber1=$('#mnumber1').val();
	var web_name=$('#web_name').val();
	var user_image=$('#logo').val();
	
	var state_id=$('#state_id').val();
	var city_id=$('#city_id').val();
	var area_id=$('#area_id').val();
	
	var address=$('#address').val();
	var gst=$('#gst').val();

	
	if(comp_name==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter comp name',
		    position: 'topRight'
		  });
		$('#comp_name').focus();
		return false;
	}
	
	var regex=/^[a-zA-Z ]*$/;
	
	if(!regex.test(comp_name)){
		iziToast.error({
		    title: 'validate fail!',
		    message: 'comp_name,please enter String value',
		    position: 'topRight'
		  });
		$('#comp_name').focus();
		return false;
	}
	
	if(tax_type==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please select tax_type',
		    position: 'topRight'
		  });
		$('#tax_type').focus();
		return false;
	}
	
	if(oname==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter oname name',
		    position: 'topRight'
		  });
		$('#oname').focus();
		return false;
	}
	
	
	if(!regex.test(oname)){
		iziToast.error({
		    title: 'validate fail!',
		    message: 'owner name,please enter String value',
		    position: 'topRight'
		  });
		$('#oname').focus();
		return false;
	}
	
	if(email==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter email name',
		    position: 'topRight'
		  });
		$('#email').focus();
		return false;
	}
		
  	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  				//^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (reg.test(email) == false) 
      {
      	 iziToast.error({
   		    title: 'invalid email_id!',
   		    message: 'enter the particular email',
   		    position: 'topRight'
   		  });
      	 $('#email').focus();
          return false;
      }
      
      if(mnumber1 == ""){
		  iziToast.error({
		    title: 'Pl. enter mobile_number!',
		    message: 'sdfsf',
		    position: 'topRight'
		  });
		  $('#mnumber1').focus();
		  return false;
      }
	
      var mnum=/^[0]?[6789]\d{9}$/;
		if(mnum.test(mnumber1) == false){
			iziToast.error({
			 title: 'invalid mobile number!',
			 message: 'enter the particular number',
			 position: 'topRight'
			});
		$('#mnumber1').focus();
		return false;
		}
	
		if(web_name==""){
			iziToast.error({
			    title: 'required!',
			    message: 'please enter web name',
			    position: 'topRight'
			  });
			$('#web_name').focus();
			return false;
		}
		
		
		if(!regex.test(web_name)){
			iziToast.error({
			    title: 'validate fail!',
			    message: 'owner name,please enter String value',
			    position: 'topRight'
			  });
			$('#web_name').focus();
			return false;
		}	
		
		if(user_image==""){
			iziToast.error({
			    title: 'required!',
			    message: 'please select user_image',
			    position: 'topRight'
			  });
			$('#logo').focus();
			$('#limage').html("select image").addClass('text-danger')
			return false;
		}
		
		var limage=$('#limage');
		if(limage.html()!=null){
			limage.html('');
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
		
		
		if(address==""){
			iziToast.error({
			    title: 'required!',
			    message: 'please enter address',
			    position: 'topRight'
			  });
			$('#pincode').focus();
			return false;
		}
		
		if(gst==""){
			iziToast.error({
			    title: 'required!',
			    message: 'please enter gst number',
			    position: 'topRight'
			  });
			$('#gst').focus();
			return false;
		}
		
	var form_data = new FormData();
	
	var file_data = $('#logo').prop('files')[0];
	var other_data = $('#wizard_with_validation').serializeArray();
	$.each(other_data , function(key ,input) {
		form_data.append(input.name , input.value);
		console.log(input.name,input.value);
	});
	
	form_data.append('logo',file_data);
	
	$.ajax({
		url : 'company.db',
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
				$('#wizard_with_validation')[0].reset();
				$('#add_form').modal('hide');
				res();
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#wizard_with_validation')[0].reset();
			}
		}
	});
}

function check_img(){
	var dd=$('#view').val();
	console.log(dd);
}