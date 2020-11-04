var table='';
window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Item_group_model",
            	columns : [ {
            		"data" : "item_group_id"
            	},{
            		"data" : "material_id.material_name"
            	},{
            		"data" : "item_size"
            	},{
            		"data" : "unit_id.unit_name"
            	},{
            		"data" : "items"
            	},{
            		"data" : "short_name"
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
		
		$('[name = "id"]').val(data["item_group_id"]);
		$('[name = "item_name"]').val(data["item_name"]);
		$('[name = "item_size"]').val(data["item_size"]);
		
		var maid = data["material_id"];
		var utid = data["unit_id"];
		
		var materialId = maid["material_id"];
		var materialName = maid["material_name"];
		
		var unitId = utid["unit_id"];
		var unitName = utid["unit_name"];
		
		$('#mid option:first').val(materialId).html(materialName); //this
		$('#mid:first').attr('selected','selected');
		
		$('#unit_id option:first').val(unitId).html(unitName); //this
		$('#unit_id:first').attr('selected','selected');
		
		$('[name = "price"]').val(data["price"]);
		$('[name = "short_name"]').val(data["short_name"]);
		
		
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
	            		  data:{'id':data["item_group_id"],'fname':'item_group_id','model':'Item_group_model'},
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



function res(){
	$('#group_id').val(0);
	$('#item_form')[0].reset();
	$('#add_form').modal('hide');
	group();
	unit();
}



group();
function group() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'Material_model'},
		success:function(data)
		{
			$('#mid').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',0).text("Select Material");
			$('#mid').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.material_id).text(this.material_name);           
				$('#mid').append(option);
         	});
		}		
	});
}

unit();
function unit() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'Unit_model'},
		success:function(data)
		{
			$('#unit_id').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',0).text("Select Unit");
			$('#unit_id').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.unit_id).text(this.unit_name);           
				$('#unit_id').append(option);
         	});
		}		
	});
}

function save(){
	var item_name=$('[name = "item_name"]');
	var material=document.getElementById('mid');
	var bundle=$('[name = "bundle"]');
	var shortName=$('[name = "shortName"]');
	
	
//	if(empty_data(item_name,"item name")){
//				 if(dynamicDropdown(material,"Material")){
//					 if(empty_data(bundle,"Bundle")){
//						 if(empty_data(shortName,"Short Name")){
//							 
//						 }else{ return false;}
//					 }else{ return false;}
//				 }else { return false; }
//	}else{ return false; }


	$.ajax({
		url : 'item_group.db',
		method : 'POST',
		data : $('#item_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				iziToast.success({
		    	    title: 'Success',
		    	    message: 'record can inserted!!!',
		    	    position: 'topRight'
		    	  });
				$('#item_form')[0].reset();
				$('#group_id').val(0);
				$('#add_form').modal('hide');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#item_form')[0].reset();
				$('#add_form').modal('hide');
			}
		}
	});
}

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