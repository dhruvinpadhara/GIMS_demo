var table='';
window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Type_work_model",
            	columns : [ {
            		"data" : "type_work_id"
            	},{
            		"data" : "short_name"
            	},{
            		"data" : "work_name"
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
		
		$('[name = "id"]').val(data["type_work_id"]);
		$('[name = "shortName"]').val(data["short_name"]);
		$('[name = "work_name"]').val(data["work_name"]);
		
		
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
	            		  data:{'id':data["type_work_id"],'fname':'type_work_id','model':'Type_work_model'},
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
	$('#type_form')[0].reset();
	$('#add_form').modal('hide');
}

function save(){
	var shortName=$('[name = "shortName"]');
	var work_name=$('[name = "work_name"]');
	
	if(empty_data(shortName,"Short Name")){
				if(empty_data(work_name,"work Name")){
				 }else { return false; }
	}else{ return false; }


	$.ajax({
		url : 'type_work.db',
		method : 'POST',
		data : $('#type_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				$('#type_form')[0].reset();
				$('#group_id').val(0);
				$('#add_form').modal('hide');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#type_form')[0].reset();
				$('#add_form').modal('hide');
			}
		}
	});
}