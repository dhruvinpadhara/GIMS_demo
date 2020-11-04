var table = '';
window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Area_model",
            	columns : [ {
            		"data" : "aid"
            	},{
            		"data" : "aname"
            	},{
            		"data" : "pincode"
            	},{
            		"data" : "cid.cname"
            	},{
            		"data" : "sid.sname"
            	},{
            		"data" : " "
            	} ],
            	columnDefs : [
            			{
            				"targets" : -1,
            				"data" : null,
            				"defaultContent" :'<div class="dropdown"> <button class="btn btn-primary dropdown-toggle" id="action_btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action </button> <div class="dropdown-menu" aria-labelledby="about-us"> <a class="dropdown-item" id="update" data-toggle="modal" data-target="#add_form" >Edit</a> <a class="dropdown-item" id="delete">Delete</a> </div>'}, {
            				"targets" : [0],
            				"visible" : false,
            				"searchable" : false
            			}

            	],
            	"order" : [ [ 0, "desc" ] ],

            });

	$('#sample tbody').on( 'click', '#update', function () { 
		  var  data = table.row($(this).parents('tr')).data();
		  
		  	
		  var option=$('<option></option>');
			option.attr("value","");
			$('#city_id').append(option);
			$('#city_id option:first').html("select city");
		  
		  	var state=data["sid"];
			var sid=state["sid"];
			var sname=state["sname"];
			
			//setdata("state_id",sid,sname);
			$("#state_id option:first").val(sid).html(sname);
			$("#state_id option:first").attr("selected","selected");
			
			console.log(data);
			var city=data["cid"];
			var cid=city["cid"];
			var cname=city["cname"];
			
			//setdata("state_id",sid,sname);
			$("#city_id option:first").val(cid).html(cname);
			$("#city_id option:first").attr("selected","selected");
			
	      	$('[name="id"]').val(data["aid"]);
	      	$('[name="aname"]').val(data["aname"]);
	      	$('[name="pincode"]').val(data["pincode"]);
	      });
	
	
	$('#sample tbody').on( 'click', '#delete', function () { 
		  var  data = table.row($(this).parents('tr')).data();

		  swal({
	            title: 'Are you sure?',
	            text: 'You won\'t be able to revert this!',
	            icon: 'warning',
	            buttons: true,
	            dangerMode: true,
	            type: 'warning',
	            showCancelButton: true,
	            confirmButtonColor: '#00c0ef',
	            cancelButtonColor: '#ff8080',
	            confirmButtonText: 'Yes, delete it!'
	        }).then((willDelete) => {
	            if (willDelete) {
	                $.ajax({
	                	type:"POST",
	                	url:"delete.db",
	                	data:{'model':'Area_model','fname':'aid','id':data["aid"]},
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
  			//append first show option
  			var optionf = $('<option/>');
				optionf.attr('value',"").text("select state");
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


function check(id){
	$.ajax({
  		url:'dmodelwithid.db',
  		method:'POST',
  		data: {'model':'City_model','fname':'sid','id':id} ,
  		success:function(data)
  		{
  			$('#city_id').html('');
  			//append first show option
  			var optionf = $('<option/>');
				optionf.attr('value',"").text("select city");
				$('#city_id').append(optionf);
				
  			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.cid).text(this.cname);           
				$('#city_id').append(option);
         	});
  		}		
  	});
}

my_update();
function my_update(){
	console.log("hello");
	$('a #delete').hide();
}
		
function show(){
	$('#add_form').modal('show');
	
	var option=$('<option></option>');
	option.attr("value","");
	$('#city_id').append(option);
	$('#city_id option:first').html("select city");
}

function res(){
	$('#area_form')[0].reset();
	$('#area_id').val(0);
	state();
	$('#city_id').html('');
	$('#add_form').modal('hide');
}

function save(){
	
	var state=$('[name="state"]');
	var city=$('[name="city"]');
	var area_name=$('[name="aname"]');
	var pincode=$('[name="pincode"]');
	
	if(empty_data(state,"select State")){
		if(empty_data(city,"city name")){
			if(empty_data(area_name,"area name")){
				if(allLetter(area_name,"area name")){
					if(zipcode(pincode,"pincode")){
						
					}else { return false; }
				}else { return false; }
			}else{ return false; }
		}else{ return false; }
	}else{ return false; }
	
	
	$.ajax({
		url : 'area.db', 
		method : 'POST',
		data : $('#area_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				$('#area_form')[0].reset();
				$('#add_form').modal('hide');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#area_form')[0].reset();
				$('#add_form').modal('hide');
			}
		}
	});
}
