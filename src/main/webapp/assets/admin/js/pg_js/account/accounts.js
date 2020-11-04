var table='';

window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Account_detail_model",
            	columns : [ {
            		"data" : "accdid"
            	},{
            		"data" : "party_code"
            	},{
            		"data" : "party_name"
            	},{
            		"data" : "phone_number"
            	},{
            		"data" : "gst_number"
            	},{
            		"data" : " "
            	} ],
            	columnDefs : [
            			{
            				"targets" : -1,
            				"data" : null,
            				"defaultContent" :'<div class="list-icons"> <a href="#" class="list-icons-item update1" id="update" data-toggle="modal" data-target="#add_form"><i class="icon-pencil7"></i></a> <a href="#" class="list-icons-item delete1" id="delete"><i class="icon-trash"></i></a></div>'
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
		var option = $('<option></option>');
		var option1 = $('<option></option>');
		
		$('#city_id').html('');
		$('#area_id').html('');
		
		option.attr('value',0);
		$('#city_id').append(option);
		$('#area_id').append(option1);
		$('#city_id option:first').html('select city');
		$('#area_id option:first').html('select area');
		
		
//		$('[name = "id"]').val(data["group_id"]);
		$('[name="id"]').val(data["accdid"]);
		$('[name = "pcode"]').val(data["party_code"]);
		$('[name = "partyname"]').val(data["party_name"]);
		
		var gp=data["group_id"];  
		var acc=data["accountId"];
		
		var gpId =gp['group_id'];  
		var gpName =gp['group_name'];
		
		var accId =acc['account_id'];  
		var accName =acc['account_name'];
		
		$('#group_id option:first').val(gpId).html(gpName); //this
		$('#group_id:first').attr('selected','selected');
		
		$('#accounts_id option:first').val(accId).html(accName); //this
		$('#accounts_id:first').attr('selected','selected');
		
		
		
		$('[name = "cperson"]').val(data["contact_person"]);
		$('[name = "phone_number"]').val(data["phone_number"]);
		$('[name = "mobile_number"]').val(data["mobile_number"]);
		$('[name = "email"]').val(data["email"]);
		

		
		
		$('[name = "address"]').val(data["address"]);
		$('[name = "discount"]').val(data["discount"]);
		$('[name = "gstNumber"]').val(data["gst_number"]);
		$('[name = "transporter"]').val(data["transporter"]);
		$('[name = "agent"]').val(data["agent"]);
		
		$('[name = "vat"]').val(data["vat"]);
		$('[name = "eVat"]').val(data["eVat"]);
		$('[name = "oftype"]').val(data["type"]);
		$('[name = "tdays"]').val(data["day"]);
		
		var state1=data["stateId"];
		var city1=data["cityId"];
		var area1=data["areaId"];
		
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
	            		  data:{'id':data["accdid"],'fname':'accdid','model':'Account_detail_model'},
	            		  dataType : "JSON",
	            		  success:function reload(data){
	            			  if (data.status) {
	            					table.ajax.reload();
	            					swal("Good", "Success Fully", "success");
	            					//$('#add_form').modal('hide');
	            				} else {
	            					swal("sorry!", "successfully not inserted data!!", "error");

	            				} 
	            		  },
	        		});
	        	}else{
	        		swal("data is not deleted");	
	        	}
	        });
		} );	
	//time pachi function call thay
	//setTimeout( function(){ access1(); },500);
}

function show(){
	$('#account_id').val(0);
	$('#account_form')[0].reset();
	var option=$('<option></option>');
	var option1=$('<option></option>');
	
	$('#city_id').html('');
	$('#area_id').html('');
	option.attr("value","");
	option1.attr("value","");
	$('#city_id').append(option);
	$('#area_id').append(option1);
	$('#city_id option:first').html("select City");
	$('#area_id option:first').html("select Area");
	$('#add_form').modal('show');
}

function remo(){
	$('#view').attr('src',"");
	$('#user_image').val('');
}

function res(){
	$('#account_id').val(0);
	$('#account_form')[0].reset();
	$('#add_form').modal('hide');
	group();
	account();
	state();
	
}

group();
function group() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'Group_model'},
		success:function(data)
		{
			$('#group_id').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',0).text("select Group");
			$('#group_id').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.group_id).text(this.group_name);           
				$('#group_id').append(option);
         	});
		}		
	});
}

account();
function account() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'Account_model'},
		success:function(data)
		{
			$('#accounts_id').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',0).text("select Account");
			$('#accounts_id').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.account_id).text(this.account_name);           
				$('#accounts_id').append(option);
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
			optionf.attr('value',0).text("select State");
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
			optionf.attr('value',0).text("select City");
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
			optionf.attr('value',0).text("select Area");
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


function save(){
	
//	var acc_pcode=$('[name = "pcode"]');
//	var acc_partyname=$('[name = "partyname"]');
//	var acc_group=document.getElementById('group_id');
//	var acc_acctype=document.getElementById('accounts_id');
//
//	var acc_contactperson=$('[name = "cperson"]');
//	var acc_phone=$('[name = "phone_number"]');
//	var acc_mobile=$('[name = "mobile_number"]');
//	var email=$('[name = "email"]');
//	//var acc_email=document.getElementById('email_id');
//	
//	var acc_state=document.getElementById('state_id');
//	var acc_city=document.getElementById('city_id');
//	var acc_area=document.getElementById('area_id');
//	var acc_address=$('[name = "address"]');
//
//	var acc_discunt=$('[name = "discount"]');
//	var acc_gst=$('[name = "gstNumber"]');
//	var acc_transporter=$('[name = "transporter"]');
//	var acc_agent=$('[name = "agent"]');
//
//	var acc_vat=$('[name = "vat"]');
//	var acc_evat=$('[name = "eVat"]');
//	var acc_type=$('[name = "oftype"]');
//	var acc_tday=$('[name = "tdays"]');
//	
//	var reg=/^[a-zA-Z ]*$/;
//	
//	if (empty_data(acc_pcode,"party code")) {
//		if (empty_data(acc_partyname,"Party name")) {
//			if (dynamicDropdown(acc_group,"Group")) {
//				if (dynamicDropdown(acc_acctype,"Accounts")) {
//					if (empty_data(acc_contactperson,"Person Details")) {
//						if (mobile(acc_phone) || mobile(acc_mobile)) {
//						
//								if (empty_data(email,"email")) {
//									
//									if (dynamicDropdown(acc_state,"State")) {
//										if (dynamicDropdown(acc_city,"City")) {
//											if (dynamicDropdown((acc_area,"Area"))) {
//												if (empty_data(acc_address,"address")) {
//												
//													if (empty_data(acc_discunt,"discunt")) {
//														if (empty_data(acc_gst,"GST")) {
//															if (empty_data(acc_transporter,"Transporter")) {
//																if (empty_data(acc_agent,"Agent")) {
//																	
//																	if (empty_data(acc_vat,"Vat")) {
//																		if (empty_data(acc_evat,"E vat")) {
//																			if (empty_data(acc_type,"Type")) {
//																				if (empty_data(acc_tday,"Day")) {
//																					
//																				} else {return false;}
//																			} else {return false;}
//																		} else {return false;}
//																	} else {return false;}
//																	
//																} else {return false;}
//															} else {return false;}
//														} else {return false;}
//													} else {return false;}
//	
//												}else{return false;}
//											}else{return false;}
//										}else{return false;}
//									}else{return false;}
//									
//								} else {return false;}
//						} else {return false;}
//					} else {return false;}
//				} else {return false;}
//			} else {return false;}
//		} else {return false;}
//	}else{return false;}
//	

	$.ajax({
		url : 'accounts.db',
		method : 'POST',
		data : $('#account_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				$('#account_form')[0].reset();
				$('#account_id').val(0);
				$('#add_form').modal('hide');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#account_form')[0].reset();
				$('#add_form').modal('hide');
			}
		}
	});
}


/*JavaScript function for Dynamic validation dynamic DropDwon */

function dynamicDropdown(ucountry,name) {
    if (ucountry.value == "0") {
    	iziToast.error({
    	    title: ' Select '+name+'',
    	    message: 'select from the list',
    	    position: 'topRight'
    	  });
        ucountry.focus();
        return false;
    } else {
        return true;
    }
}



/*JavaScript function for Dynamic validation validating */
function dynamicValidation(uname,name,regex) {
	var letters = regex;
    if (uname.value.match(letters)) {
        return true;
    } else {
    	iziToast.error({
    	    title: ' Enter '+name+'',
    	    message: 'contain only string [A-Za-z and space]!!!',
    	    position: 'topRight'
    	  });
        uname.focus();
        return false;
    }
}

/*JavaScript code for All numeric */
function allnumericmobile(uzip) {
    var numbers = /^[789][0-9]{9}$/;
    if (uzip.value.match(numbers)) {
        return true;
    } else {
        iziToast.error({
    	    title: ' Enter Mobile Number ',
    	    message: 'Mobile Number must have numeric characters only !!!',
    	    position: 'topRight'
    	  });
        uzip.focus();
        return false;
    }
}
