var table='';
//var id=$('[name="pccid"]').val();
var prvtocid=$('#prvctoid').val();
window.onload=function(){
	
	table=$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "dmodelWithData.db?model=Privillege_component_model&fname=pid&id="+prvtocid,
          	columns : [ {
          		"data" : "cid"
          	},{
          		"data" : "cname"
          	},{
          		"data" : "clink"
          	},{
          		"data" : "pid.pname"
          	},{
          		"data" : " "
          	} ],
          	columnDefs : [
          			{
          				"targets" : -1,
          				"data" : null,
          				"defaultContent" :'<div class="dropdown"> <button class="btn btn-primary dropdown-toggle" type="button" id="about-us" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Action </button><div class="dropdown-menu" aria-labelledby="about-us"><a class="dropdown-item" id="show_component">show component</a><a class="dropdown-item update1" data-toggle="modal" data-target="#update_form" id="update">Edit</a> <a class="dropdown-item delete1" id="delete">Delete</a></div>'
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
		
		var prvid=data["pid"];
	//	console.log(data["pid"]);
	//	console.log(data);
	//	console.log(prvid);
		
		
		var prvcid=prvid["pid"];  //this
		var prvcname=prvid["pname"];//this
	
		$('#privilege_id1 option:first').val(prvcid).html(prvcname); //this
		$('#privilege_id1:first').attr('selected','selected');
		
		$('[name = "compid"]').val(data["cid"]);
		$('[name = "compname"]').val(data["cname"]);
		$('[name = "complink"]').val(data["clink"]);
	});
	
	$('#sample tbody').on( 'click', '#show_component', function () {
		var  data = table.row($(this).parents('tr')).data();
		
//		console.log(data);
		var comp_id=data["cid"]; 
		
//		console.log(comp_id);
		$.ajax({
	  		url:'dmodelwithid.db',
	  		method:'POST',
	  		data: {'model':'Privilege_comp_comp_model','fname':'cid','id':comp_id} ,
	  		success:function(data)
	  		{
//	  			console.log("prvc comp data")
//	  			console.log(data);
	  			if(data.data!=""){
	  				window.location.href="pccompofcomponent.db?record="+comp_id;
	  			}
	  			else{
	  				swal('Component Not found', 'pl. add the comonent!', 'error');
	  			}
	  		}
	  	});
		
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
	            		  data:{'id':data["cid"],'fname':'cid','model':'Privillege_component_model'},
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
	        	}
	        	else{
	        		swal("data is not deleted");
	        	}
	        });	
		} );
	setTimeout(function(){access1();},500);
}

//add row
var ss=1;
var arr=[];
function addprvi() {
	var a = document.getElementById('add');
	var v = ['<td class="col-md-5"><input class="form-control" type="text" id="cname'+ss+'" name="cname" placeholder="enter name.."/></td>',
	'<td class="col-md-5"><input class="form-control" type="text" id="clink'+ss+'" name="clink" placeholder="enter name.."/></td>',
	'<td class="col-md-2"><button type="button" class="btn btn-danger" onclick="deleterow(',ss,')">delete</button></td>'].join('');
	var c = document.createElement('tr');
	c.innerHTML = v;
	c.id="papa"+ss;
	arr.push(ss);
	ss++;
	a.appendChild(c); 
}
	
	
function deleterow(ass) {
	var pqr = document.getElementById('add');
	var tt =  document.getElementById('papa'+ass);
	pqr.removeChild(tt);
}



function save(){
	
	var prvdata=$('#privilege_id').val();
	var prvcompid=$('#privilege_component').val();
	var tbody = $("#abcd tbody");
	var span=$('#ad_row');
	
	//console.log(rowdata);
	if(prvdata==""){
		iziToast.error({
		    title: 'Privilege!',
		    message: 'please select prvilege component',
		    position: 'topRight',
		});
		$('#privilege_id').focus();
		return false;
	}
	
	
	//var db=add_row_check(tbody,span);
	if (tbody.children().length == 0) {
		iziToast.error({
		    title: 'Add row!',
		    message: 'please click on add row button',
		    position: 'topRight',
		});
		$(span).html('pl click and add row').addClass("text-danger");
		return false;
	}
	
	if($(span).html()!=""){
		$(span).html('');
	}
	
	
	if(prvdata!="" && prvcompid==""){
		for (var i = 0; i < arr.length; i++) {
			var cname=$('#cname'+arr[i]).val();
			var clink=$('#clink'+arr[i]).val();	
		
			if(cname==""){
				iziToast.error({
				    title: 'privilege!',
				    message: 'please enter privilege component name',
				    position: 'topRight'
				  });
				$('#cname'+arr[i]).focus();
				return false;
			}
			
			var regex=/^[a-zA-Z ]*$/;
			
			if(!regex.test(cname)){
				iziToast.error({
				    title: 'validate fail!',
				    message: 'please enter String value',
				    position: 'topRight'
				  });
				$('#cname'+arr[i]).focus();
				return false;
			}
			
			if(clink==""){
				iziToast.error({
				    title: 'privilege!',
				    message: 'please enter privilege component link',
				    position: 'topRight'
				  });
				$('#clink'+arr[i]).focus();
				return false;
			}
		}
		
		$.ajax({
			url : 'pcomponent.db',
			method : 'POST',
			data : $('#privilege_component_form').serialize(),
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
	
	else if(prvdata!="" && prvcompid!=""){
		if(prvcompid==""){
			iziToast.error({
			    title: 'Privilege component!',
			    message: 'please select prvilege component',
			    position: 'topRight',
			});
			$('#prvcompid').focus();
			return false;
		}
		for (var i = 0; i < arr.length; i++) {
			var cname=$('#cname'+arr[i]).val();
			var clink=$('#clink'+arr[i]).val();	
		
			if(cname==""){
				iziToast.error({
				    title: 'privilege!',
				    message: 'please enter privilege component of component name',
				    position: 'topRight'
				  });
				$('#cname'+arr[i]).focus();
				return false;
			}
			
			var regex=/^[a-zA-Z ]*$/;
			
			if(!regex.test(cname)){
				iziToast.error({
				    title: 'validate fail!',
				    message: 'please enter String value',
				    position: 'topRight'
				  });
				$('#cname'+arr[i]).focus();
				return false;
			}
			
			if(clink==""){
				iziToast.error({
				    title: 'privilege!',
				    message: 'please enter privilege component of component link',
				    position: 'topRight'
				  });
				$('#clink'+arr[i]).focus();
				return false;
			}
		}
		$.ajax({
			url : 'pcompofcomponent.db',
			method : 'POST',
			data : $('#privilege_component_form').serialize(),
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
}

//update
function savecomp(){
	
	var privilege_id1=$('#privilege_id1').val();
	var component_name=$('#component_name').val();
	var component_link=$('#component_link').val();
	
	if(privilege_id1==""){
		iziToast.error({
		    title: 'privilege!',
		    message: 'select privilege name',
		    position: 'topRight'
		  });
		$('#privilege_id1').focus();
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
		$('#area_name').focus();
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
	
	/*var regex1=/\d/
	
	if(!regex.test(component_link)){
		iziToast.error({
		    title: 'validate fail!',
		    message: 'enter component link',
		    position: 'topRight'
		  });
		$('#component_link').focus();
		return false;
	}*/
	
	
	$.ajax({
		url : 'pcomponents.db',
		method : 'POST',
		data : $('#privilege_component_form1').serialize(),
		success : function(ret){
			if (ret.input) {
				table.ajax.reload();
				swal("Good", "Success Fully", "success");
				resuppriv();
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				resuppriv();
			}
		}
	});
}

//reset
function res(){
	$('#privilege_component_form')[0].reset();
	$('#privilege_component_id').val(0);
	privilege();
	getpccomponent();
	$('#add').html('');
	$('#add_form').modal('hide');
}

function resuppriv(){
	$('#privilege_component_form1')[0].reset();
	$('#privilege_component_id1').val(0);
	privilege();
	$('#update_form').modal('hide');
}

privilege();
function privilege(){
	$.ajax({
  		url:'dmodel.db',
  		method:'POST',
  		data: {'model':'Privilege_model'} ,
  		success:function(data)
  		{
  			$('.privlege').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',"").text("select privilege_id");
			$('.privlege').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.pid).text(this.pname);           
				$('.privlege').append(option);
         	});
  		}		
  	});
}




getpccomponent();
function getpccomponent(){
	$.ajax({
  		url:'dmodel.db',
  		method:'POST',
  		data: {'model':'Privillege_component_model'} ,
  		success:function(data)
  		{
  			$('#prvcdata').html('');
  			if(data.data!=""){
  				var div=$('#prvcdata').addClass("form-group col-md-6 float-left");
  				var label=$("<label></label>").html("Select Privilege component");
  				var br=$("<br/>");
  				var select=$("<select></select>").addClass("form-control prvcid").attr("id","privilege_component").attr("name","pccomponent");
  				var option=$("<option></option").text("select privilege component").val("");
  				
  				select.append(option);//appdend option tag
  				
  				div.append(label);
  				div.append(br);
  				div.append(select);
  				
  			}
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



