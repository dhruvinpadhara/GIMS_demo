var table='';

window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Privilege_model",
            	columns : [ {
            		"data" : "pid"
            	},{
            		"data" : "pname"
            	},{
            		"data" : "location"
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
		
		var lcdata=data["location"];
		$('#location_id option:first').val(lcdata).html(lcdata); //this
		$('#location_id:first').attr('selected','selected');
		$('[name = "id"]').val(data["pid"]);
		$('[name = "pname"]').val(data["pname"]);
		$('[name = "font_code"]').val(data["font_code"]);
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
	            		  data:{'id':data["pid"],'fname':'pid','model':'Privilege_model'},
	            		  dataType : "JSON",
	            		  success:function reload(data){
	            			  if (data.status) {
	            					table.ajax.reload();
	            					swal("Good", "Success Fully", "success");
	            					$('#Role_model').modal('hide');
	            				} else {
	            					swal("sorry!", "successfully not inserted data!!", "error");

	            				} 
	            		  },
	            		  
	            		 });
	        	}
	        	else{
	        		swal("data is not deleted");
	        	}
	        });
		} );
}

function res(){
	$('#privilege_id').val(0);
	$('#privilege_form')[0].reset();
	//$('#location_id').append(option);
	$('#location_id option:first').html("select location").attr("value","");
	$('#add_form').modal('hide');
}

function show(){
	$('#privilege_form')[0].reset();
	$('#add_form').modal('show');
}

function save(){
	
	
	var pname=$('[name = "pname"]');
	var location=$('[name="location"]');
	var font_code=$('[name="font_code"]');
	
	if(empty_data(pname,"Privilege name")){
		if(allLetter(pname,"Privilege name")){
			if(empty_data(location,"select location")){
				if(empty_data(font_code,"font code")){
					if(allLetter(font_code,"font code")){
						
					}else{return false;}
				}else{return false;}
			}else{return false;}
		}else{ return false; }
	}else{ return false; }
	
	//console.log(privilege_name+" "+privilege_font+" "+location_id);
	
	$.ajax({
		url : 'privilege.db',
		method : 'POST',
		data : $('#privilege_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				$('#privilege_form')[0].reset();
				$('#add_form').modal('hide');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#privilege_form')[0].reset();
				$('#add_form').modal('hide');
			}
		}
	});
	
}
