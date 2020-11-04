var table='';
window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Material_model",
            	columns : [ {
            		"data" : "material_id"
            	},{
            		"data" : "material_name"
            	},{
            		"data" : "material_desc"
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
		
		$('[name = "id"]').val(data["material_id"]);
		$('[name = "materialName"]').val(data["material_name"]);
		$('[name = "materialDesc"]').val(data["material_desc"]);
		
		
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
	            		  data:{'id':data["material_id"],'fname':'material_id','model':'Material_model'},
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
	$('#material_form')[0].reset();
	$('#add_form').modal('hide');
}

function save(){
	var materialName=$('[name = "materialName"]');
	var materialDesc=$('[name = "materialDesc"]');
	
	if(empty_data(materialName,"material Name")){
				if(empty_data(materialDesc,"material Description")){
				 }else { return false; }
	}else{ return false; }


	$.ajax({
		url : 'material.db',
		method : 'POST',
		data : $('#material_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				$('#material_form')[0].reset();
				$('#group_id').val(0);
				$('#add_form').modal('hide');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#material_form')[0].reset();
				$('#add_form').modal('hide');
			}
		}
	});
}