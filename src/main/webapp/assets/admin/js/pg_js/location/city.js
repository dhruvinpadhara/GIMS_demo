var table='';

window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=City_model",
            	columns : [ {
            		"data" : "cid"
            	},{
            		"data" : "cname"
            	},{
            		"data" : "sid.sname"
            	},{
            		"data" : " "
            	} ],
            	columnDefs : [
            			{
            				"targets" : -1,
            				"data" : null,
            				"defaultContent" :'<div class="dropdown"> <button class="btn btn-primary dropdown-toggle" type="button" id="about-us" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action </button> <div class="dropdown-menu" aria-labelledby="about-us"> <a class="dropdown-item" id="update" data-toggle="modal" data-target="#add_form" >Edit</a> <a class="dropdown-item" id="delete">Delete</a> </div>'}, {
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
		var state=data["sid"];
		var sid=state["sid"];
		var sname=state["sname"];
		
		//setdata("state_id",sid,sname);
		$("#state_id option:first").val(sid).html(sname);
		$("#state_id option:first").attr("selected","selected");
		$('[name = "id"]').val(data["cid"]);
		$('[name = "cname"]').val(data["cname"]);
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
	        }).then((willDelete) => {
	            if (willDelete) {
	                $.ajax({
	                	type:"POST",
	                	url:"delete.db",
	                	data:{'id':data["cid"],'fname':'cid','model':'City_model'},
	                	dataType:"JSON",
	                	success:function(data){
	                		if(data.status){
	                			table.ajax.reload();
            					swal("Good", "Success Fully", "success");
	                		}
	                		else{
	                			swal("sorry!", "successfully not inserted data!!", "error");
	                		}
	                	}
	                });
	              } else {
	                swal('Your Data is safe!');
	              }
	            });
		} );
	setTimeout(function(){access1()},100);
}

state();
function state(){
	$.ajax({
  		url:'dmodel.db',
  		method:'POST',
  		data: {'model':'State_model'} ,
  		success:function(data)
  		{
  			$('#state_id').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',"").text("select State");
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
function res(){
	$('#city_id').val(0);
	$('#city_form')[0].reset();
	state();
	$('#add_form').modal('hide');
}

function show(){
	$('#city_form')[0].reset();
	$('#add_form').modal('show');
}

function save(){
	
	var state_id=$('[name="state"]');
	var cname=$('[name="cname"]');
	
		if(empty_data(state_id,"select State")){
			if(empty_data(cname,"city name")){
				if(allLetter(cname,"city name")){
					
				}else{ return false; }
			}else{ return false; }
		}else{ return false; }
	
	$.ajax({
		url : 'city.db',
		method : 'POST',
		data : $('#city_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				$('#city_form')[0].reset();
				$('#add_form').modal('hide');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#city_form')[0].reset();
				$('#add_form').modal('hide');
			}
		}
	});
}