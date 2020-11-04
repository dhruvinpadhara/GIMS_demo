var table='';

window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Group_model",
            	columns : [ {
            		"data" : "group_id"
            	},{
            		"data" : "group_name"
            	},{
            		"data" : "group_code"
            	},{
            		"data" : "group_desc"
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
		$('[name = "id"]').val(data["group_id"]);
		$('[name = "gname"]').val(data["group_name"]);
		$('[name = "gcode"]').val(data["group_code"]);
		$('[name = "gdesc"]').val(data["group_desc"]);
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
	            		  data:{'id':data["group_id"],'fname':'group_id','model':'Group_model'},
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
	$('#group_id').val(0);
	$('#group_form')[0].reset();
	$('#add_form').modal('show');
}

function res(){
	$('#group_id').val(0);
	$('#group_form')[0].reset();
	$('#add_form').modal('hide');
}


function save(){
	
	var group_name=$('[name = "gname"]');
	var group_code=$('[name = "gcode"]');
	var group_desc=$('[name = "gdesc"]');
	
	
	if(empty_data(group_name,"group name")){
		 if(allLetter(group_name,"group name")){
			 if(empty_data(group_code,"group code")){
				 if(empty_data(group_desc,"group description")){
					 if(allLetter(group_desc,"group name")){
						 
					 }else{ return false;}
				 }else { return false; }
			 }else{ return false; }
		 }else{ return false; }
	}else{ return false; }


	$.ajax({
		url : 'group.db',
		method : 'POST',
		data : $('#group_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				$('#group_form')[0].reset();
				$('#group_id').val(0);
				$('#add_form').modal('hide');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#group_form')[0].reset();
				$('#add_form').modal('hide');
			}
		}
	});
}