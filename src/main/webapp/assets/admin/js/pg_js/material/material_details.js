var table='';
window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Material_details_model",
            	columns : [ {
            		"data" : "material_details_id"
            	},{
            		"data" : "item_code"
            	},{
            		"data" : "description"
            	},{
            		"data" : "purchaseDate"
            	},{
            		"data" : "empid.empname"
            	},{
            		"data" : "sendTo"
            	},{
            		"render": function (data, type, JsonResultRow, meta) {//mimage using for database model vastu
            	        return '<img style = "height:100px;width:100px" src="assets/admin/image/materialdetails/'+JsonResultRow.imageName+'">';
            	    }
            	},{
            		"data" : "mrp"
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
	//	console.log(data);
		
		//console.log(data);
		$('[name = "id"]').val(data["material_details_id"]);
		$('[name = "itemCode"]').val(data["item_code"]);
		$('[name = "description"]').val(data["description"]);
		$('[name = "billNumber"]').val(data["bill_Number"]);
		$('[name = "size"]').val(data["size"]);
			
		var gp=data["item_group_id"];
		var gpid=gp["item_group_id"];  
		var gpname=gp["item_name"];
		
		$('#itemgroup option:first').val(gpid).html(gpname); //this
		$('#itemgroup:first').attr('selected','selected');
		
		$('[name = "unit"]').val(data["unit"]);
		$('[name = "op_balenece"]').val(data["op_balenece_qty"]);
		$('[name = "op_bal"]').val(data["op_balenece_rs"]);
		$('[name = "purchaseRate"]').val(data["purchaseRate"]);
		$('[name = "purchaseCode"]').val(data["purchaseCode"]);
		$('[name = "purchaseDate"]').val(data["purchaseDate"]);
		$('[name = "salesRate"]').val(data["salesRate"]);
		$('[name = "mrp"]').val(data["mrp"]);
		$('[name = "discount"]').val(data["discount"]);
		$('[name = "itemQuality"]').val(data["itemQuality"]);
		$('[name = "perBundle"]').val(data["perBundle"]);
		$('[name = "vatRate"]').val(data["vatRate"]);
		$('[name = "aVatRate"]').val(data["aVatRate"]);
		
		var emp=data["empid"];
		var empid=emp["emp_id"];  
		var empname=emp["empname"];
		
		$('#supplier option:first').val(empid).html(empname); //this
		$('#supplier:first').attr('selected','selected');
		
		$('[name = "sendTo"]').val(data["sendTo"]);
		
//		//$("#user_image").val(data["image"]);
//		//$('#view').attr("src","img/emp/"+data["image"]);
//		var accc=$('#materialImage').val(data["image"]);
//		var str="img/emp/"+accc;
//		$('#view').attr("src",str);
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
		            		  data:{'id':data["materialDetailsId"],'fname':'materialDetailsId','model':'MaterialDeatailsModel'},
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
//	setTimeout( function(){ access1(); },500);
}

function resetForm(){
	$('#account_id').val(0);
	$('#material_details_form')[0].reset();
	$('#add_form').modal('hide');
}

itemGroup();
function itemGroup() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'Material_model'},
		success:function(data)
		{
			$('#itemgroup').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',0).text("Select Item Group");
			$('#itemgroup').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.material_id).text(this.material_name);           
				$('#itemgroup').append(option);
         	});
		}		
	});
}

function remo(){
	$("#material_image").val("");
	$('#view').attr("src","");
}


acb();
function acb() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'Account_detail_model'},
		success:function(data)
		{
			$('#supplier').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',0).text("Select Supplier");
			$('#supplier').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.accdid).text(this.party_name);           
				$('#supplier').append(option);
         	});
		}		
	});
}

acb1();
function acb1() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'Employee_model'},
		success:function(data)
		{
			$('#sendTo').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',0).text("Send to");
			$('#sendTo').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.emp_id).text(this.empname);           
				$('#sendTo').append(option);
         	});
		}		
	});
}


function save(){
	
//	var itemCode=$('[name = "itemCode"]');
//	var description=$('[name = "description"]');
//	var billNumber=$('[name = "billNumber"]');
//	var size=$('[name = "size"]');
//	
//	var itemgroup=document.getElementById('itemgroup');
//	var unit=$('[name = "unit"]');
//	var op_balenece=$('[name = "op_balenece"]');
//	var op_bal=$('[name = "op_bal"]');
//	
//	var purchaseRate=$('[name = "purchaseRate"]');
//	var purchaseCode=$('[name = "purchaseCode"]');
//	var purchaseDate=$('[name = "purchaseDate"]');
//	var salesRate=$('[name = "salesRate"]');
//
//	var mrp=$('[name = "mrp"]');
//	var discount=$('[name = "discount"]');
//	var itemQuality=$('[name = "itemQuality"]');
//	var perBundle=$('[name = "perBundle"]');
//
//	var vatRate=$('[name = "vatRate"]');
//	var aVatRate=$('[name = "aVatRate"]');
//	var supplier=document.getElementById('supplier');
//	var sendTo=document.getElementById('sendTo');
//	var imagedata=document.getElementById('materialImage');
//	
//	
//	
//	if (empty_data(itemCode,"Item Code")) {
//		if (empty_data(description,"description")) {
//			if (empty_data(billNumber,"bill Number")) {
//				if (empty_data(size,"size")) {
//					
//					if (dynamicDropdown(itemgroup,"Item Group")) {
//						if (empty_data(unit,"unit")) {
//							if (empty_data(op_balenece,"Balence")) {
//								if (empty_data(op_bal,"Balence")) {
//									
//									if (empty_data(purchaseRate,"purchase Rate")) {
//										if (empty_data(purchaseCode,"purchas eCode")) {
//											if (empty_data(purchaseDate,"purchase Date")) {
//												if (empty_data(salesRate,"sales Rate")) {
//													
//													if (empty_data(mrp,"mrp")) {
//														if (empty_data(discount,"discount")) {
//															if (empty_data(itemQuality,"itemQuality")) {
//																if (empty_data(perBundle,"per Bundle")) {
//																	
//			if (empty_data(vatRate,"vat Rate")) {
//				if (empty_data(aVatRate,"advance Vat Rate")) {
//					if (dynamicDropdown(supplier,"Supplier")) {
//						if (empty_data(sendTo,"send To")) {
////							if (empty_data(imagedata,"Image")) {
////								
////							}else{return false;}
//						}else{return false;}
//					}else{return false;}
//				}else{return false;}
//			}else{return false;}														
//																	
//																}else{return false;}
//															}else{return false;}
//														}else{return false;}
//													}else{return false;}
//													
//												}else{return false;}
//											}else{return false;}
//										}else{return false;}
//									}else{return false;}
//									
//								}else{return false;}
//							}else{return false;}
//						}else{return false;}
//					}else{return false;}
//					
//				} else {return false;}
//			} else {return false;}
//		} else {return false;}
//	} else {return false;}
//	
	
	
	var form_data = new FormData();
	
	var file_data = $('#material_image').prop('files')[0];
	var other_data = $('#material_details_form').serializeArray();
	$.each(other_data , function(key ,input) {
		form_data.append(input.name , input.value);
		console.log(input.name+ " "+ input.value);
	});
	
	form_data.append('image1',file_data);
	
	$.ajax({
		url : 'material_details.db',
		method : 'POST',
		cache : false,
		contentType : false,
		processData : false,
		data : form_data,
		dataType : "JSON",
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				resetForm();
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#material_details_form')[0].reset();
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

