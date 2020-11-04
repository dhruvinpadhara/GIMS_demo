var table='';
window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=State_model",
            	columns : [ {
            		"data" : "sid"
            	},{
            		"data" : "sname"
            	},{
            		"data" : " "
            	} ],
            	columnDefs : [
            			{
            				"targets" : -1,
            				"data" : null,
            				"defaultContent" :'<div class="dropdown"> <button class="btn btn-primary dropdown-toggle" type="button" id="about-us" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action </button> <div class="dropdown-menu" aria-labelledby="about-us"> <a class="dropdown-item update1" id="update" data-toggle="modal" data-target="#add_form" >Edit</a> <a class="dropdown-item delete1" id="delete">Delete</a> </div>'}, {
            				"targets" : [0],
            				"visible" : false,
            				"searchable" : false
            			}
            	],
            	"order" : [ [ 0, "desc" ] ],
            });	
	$('#sample tbody').on( 'click', '#update', function () { 
		var  data = table.row($(this).parents('tr')).data();
		$('[name = "sid"]').val(data["sid"]);
		$('[name = "sname"]').val(data["sname"]);
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
	        }).then((willDelete)=>{
	        	if(willDelete){
	        		$.ajax({
	            		type:"POST",
	            		  url: "delete.db",
	            		  data:{'id':data["sid"],'fname':'sid','model':'State_model'},
	            		  dataType : "JSON",
	            		  success:function(data){
	            			  if (data.status) {
	            					table.ajax.reload();
	            					swal("Good", "Success Fully", "success");
	            					$('#State_model').modal('hide');
	            				} else {
	            					swal("sorry!", "successfully not inserted data!!", "error");
	            				}
	            		  }
	        		});
	        	}
	        	else{
	        		swal("your data is not deleted");
	        	}
	        });
		} );
	setTimeout( function(){ access1(); },100);
//	setTimeout(function(){access1();},100);
}

function show(){
	$('#state_form')[0].reset();
	$('#add_form').modal('show');
}

function res(){
	$('#state_id').val(0);
	$('#state_form')[0].reset();
	$('#add_form').modal('hide');
}

function save(){
	var sname=$('[name="sname"]');

	if(empty_data(sname,"State name")){
		if(allLetter(sname,"State name")){
			
		}else{ return false; }
	}else{ return false; }
	
	$.ajax({
		url : 'state.db',
		method : 'POST',
		data : $('#state_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				$('#state_form')[0].reset();
				$('#add_form').modal('hide');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#state_form')[0].reset();
				$('#add_form').modal('hide');
			}
		}
	});
}