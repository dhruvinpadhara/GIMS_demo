var table='';

window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'excel', 'csv', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Role_model",
            	columns : [ {
            		"data" : "rid"
            	},{
            		"data" : "rname"
            	},{
            		"data" : "rdesc"
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
		$('[name = "id"]').val(data["rid"]);
		$('[name = "rname"]').val(data["rname"]);
		$('[name = "rdesc"]').val(data["rdesc"]);
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
	            		  data:{'id':data["rid"],'fname':'rid','model':'Role_model'},
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
	setTimeout( function(){ access1(); },100);
}
function res(){
	$('#role_id').val(0);
	$('#role_form')[0].reset();
	$('#add_form').modal('hide');
}


function save(){
	
	
	var role_name=$('[name = "rname"]');
	var role_desc=$('[name="rdesc"]');
	
	if(empty_data(role_name,"Role name")){
		if(allLetter(role_name,"role name")){
			if(empty_data(role_desc,"role description")){
				if(allLetter(role_desc,"role description")){
				}else{return false;}
			}else{return false;}
		}else{ return false; }
	}else{ return false; }
	
	
	$.ajax({
		url : 'role.db',
		method : 'POST',
		data : $('#role_form').serialize(),
		success : function(ret){
			if (ret.input) {
				
				iziToast.success({
		    	    title: 'Success',
		    	    message: 'record can be success!!!',
		    	    position: 'topRight'
		    	  });
				table.ajax.reload();
//				swal("Good", "Success Fully", "success");
				$('#role_form')[0].reset();
				$('#add_form').modal('hide');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#role_form')[0].reset();
				$('#add_form').modal('hide');
			}
		}
	});
}