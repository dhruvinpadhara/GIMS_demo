var table='';
//var id=$('[name="pccid"]').val();
var pccompofcompid=$('#pccompofcompid').val();
window.onload=function(){
	
	table=$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "dmodelWithData.db?model=Privilege_comp_comp_model&fname=cid&id="+pccompofcompid,
          	columns : [ {
          		"data" : "pccid"
          	},{
          		"data" : "cname"
          	},{
          		"data" : "clink"
          	},{
          		"data" : "cid.cname"
          	},{
          		"data" : "pid.pname"
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
		console.log(data);
		var select=$('#privilege_component');
		var option=$("<option></option").val("").text("select privilege component");
		select.append(option);
		
		var prvid=data["pid"];  
		var prvcid=data["cid"];
		
		var privid=prvid["pid"];
		var prvname=prvid["pname"];
		
		var privcid=prvcid["cid"];
		var privcname=prvcid["cname"];
		
		$('#privilege_id option:first').val(privid).html(prvname); //this
		$('#privilege_id:first').attr('selected','selected');
		
		$('#privilege_component option:first').val(privcid).html(privcname);
		$('#privilege_component:first').attr('selected','selected');
		$('[name = "id"]').val(data["pccid"]);
		$('[name = "cname"]').val(data["cname"]);
		$('[name = "clink"]').val(data["clink"]);
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
	        }).then((willdelete)=>{
	        	if(willdelete){
	        		$.ajax({
	            		type:"POST",
	            		  url: "delete.db",
	            		  data:{'id':data["pccid"],'fname':'pccid','model':'Privilege_comp_comp_model'},
	            		  dataType : "JSON",
	            		  success:function reload(data){
	            			  if (data.status) {
	            					table.ajax.reload();
	            					swal("Good", "Success Fully", "success");
	            					$('#Role_model').modal('hide');
	            				} else {
	            					swal("sorry!", "successfully not inserted data!!", "error");

	            				}
	            		  }
	        		});
	        	}else{
	        		swal("data is not deleted");
	        	}
	        });     		
	   } );
}

function res(){
	$('#privcofcomp_form')[0].reset();
	$('#privcofcomp_id').val(0);
	privilege();
	$('#privilege_component').html('');
	$('#add_form').modal('hide');
	
}

function show(){
	$('#add_form').modal('show');
}

function save(){
	
	var privilege_id=$('#privilege_id').val();
	var privilege_component=$('#privilege_component').val();
	var component_name=$('#component_name').val();
	var component_link=$('#component_link').val();
	
	if(privilege_id==""){
		iziToast.error({
		    title: 'privilege!',
		    message: 'select privilege name',
		    position: 'topRight'
		  });
		$('#privilege_id').focus();
		return false;
	}
	
	if(privilege_component==""){
		iziToast.error({
		    title: 'privilege!',
		    message: 'select privilege component name',
		    position: 'topRight'
		  });
		$('#privilege_component').focus();
		return false;
	}
	
	if(component_name==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter component name',
		    position: 'topRight'
		  });
		$('#component_name').focus();
		return false;
	}
	
	var regex=/^[a-zA-Z ]*$/;
	
	if(!regex.test(component_name)){
		iziToast.error({
		    title: 'validate fail!',
		    message: 'enter component name',
		    position: 'topRight'
		  });
		$('#component_name').focus();
		return false;
	}
	
	if(component_link==""){
		iziToast.error({
		    title: 'required!',
		    message: 'please enter component link',
		    position: 'topRight'
		  });
		$('#component_link').focus();
		return false;
	}
	$.ajax({
		url : 'pcompofcomp.db',
		method : 'POST',
		data : $('#privcofcomp_form').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				res();
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				res();
			}
		}
	});
}

privilege();
function privilege(){
	$.ajax({
  		url:'dmodel.db',
  		method:'POST',
  		data: {'model':'Privilege_model'} ,
  		success:function(data)
  		{
  			$('#privilege_id').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',"").text("select privilege_id");
			$('#privilege_id').append(optionf);
			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.pid).text(this.pname);           
				$('#privilege_id').append(option);
			});
  		}		
  	});
}

function check(id){
	$.ajax({
  		url:'dmodelwithid.db',
  		method:'POST',
  		data: {'model':'Privillege_component_model','fname':'pid','id':id} ,
  		success:function(data)
  		{
  			$('.prvcid').html('');
  			//append first show option
  			var optionf = $('<option/>');
				optionf.attr('value',"").text("select component");
				$('.prvcid').append(optionf);
				
  			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.cid).text(this.cname);           
				$('.prvcid').append(option);
         	});
  		}		
  	});
}