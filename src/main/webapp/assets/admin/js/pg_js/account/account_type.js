var table='';

window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Account_model",
            	columns : [ {
            		"data" : "account_id"
            	},{
            		"data" : "account_name"
            	},{
            		"data" : "account_desc"
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
		$('[name = "id"]').val(data["account_id"]);
		$('[name = "acname"]').val(data["account_name"]);
		$('[name = "acdesc"]').val(data["account_desc"]);
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
	            		  data:{'id':data["account_id"],'fname':'account_id','model':'Account_model'},
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
	$('#add_form').modal('show');
}

function res(){
	$('#account_id').val(0);
	$('#account_form')[0].reset();
	$('#add_form').modal('hide');
}


function save(){
	
	var account_name=$('[name = "acname"]');
	var account_desc=$('[name = "acdesc"]');
	
	
	if(empty_data(account_name,"account name")){
		 if(allLetter(account_name,"account name")){
				 if(empty_data(account_desc,"account description")){
					 if(allLetter(account_desc,"account name")){
						 
					 }else{ return false;}
			 }else{ return false; }
		 }else{ return false; }
	}else{ return false; }
	
	//console.log(role_name+" "+role_desc)
	$.ajax({
		url : 'account_type.db',
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