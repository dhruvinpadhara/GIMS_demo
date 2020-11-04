var table="";
window.onload=function(){
	table=$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Privilege_model",
          	columns : [ {
          		"data" : "pid"
          	},{
          		"data" : "pname"
          	},{
          		"data" : " "
          	} ],
          	columnDefs : [
          			{
          				"targets" : -1,
          				"data" : null,
          				"defaultContent" :'<td> <a class="btn btn-info btn-action" id="send" title="Details"> <i  class="fa fa-eye" aria-hidden="true"></i></a> </td>'
          			},
          			{
          				"targets" : [0],
          				"visible" : false,
          				"searchable" : false
          			}
          	],
          	"order" : [ [ 0, "desc" ] ],
          });
}

/*function send(){
	window.location.href="pcomponent_details.db";
}*/
$('#sample tbody').on('click','#send',function(){
	var data=table.row($(this).parents('tr')).data();
	$('[name="pccid"]').val(data["pid"]);
	var id=$('[name="pccid"]').val();
	//console.log("id:"+id);
	window.location.href="pccompofcomp.db?record="+id;
})


drop();
function drop(){
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

function show_priv_comp(id){
//	alert(id);
	$.ajax({
  		url:'dmodelwithid.db',
  		method:'POST',
  		data: {'model':'Privillege_component_model','fname':'pid','id':id} ,
  		success:function(data)
  		{	
  			$('#old_comp').html('');
  			var obj=data.data;
			$(obj).each(function()
			{	
				var li = $('<li><input type="checkbox" onclick="acs_checkbox()" id="'+this.cid+'" name="priv_comp" value="' + this.cid + '"/>' +
			               '<label style="padding-left: 20px;" for="' + this.cname + '"></label></li>');
				li.find('label').text(this.cname);           
				$('#old_comp').append(li);
         	});
  		}		
  	});
}
function res(){
	$('#privilege_component_form')[0].reset();
	$('#privilege_component_id').val(0);
	$('#old_comp').html('');
	$('#add').html('');
	drop();
	$('#add_form').modal('hide');
}

function show(){
	$('#add_form').modal('show');
}

var ss=1;
var arr=[];//use for validation loop

function addprvi() {
	var a = document.getElementById('add');
	var v = ['<td class="col-md-5"><input class="form-control" id="cname'+ss+'" type="text" name="cname" placeholder="enter name.." required /></td>',
	'<td class="col-md-5"><input class="form-control" id="clink'+ss+'" type="text" name="clink" placeholder="enter name.." required /></td>',
	'<td class="col-md-2"><button type="button" class="btn btn-danger" onclick="deleterow(',ss,')">delete</button></td>'].join('');
	var c = document.createElement('tr');
	c.innerHTML = v;
	c.id="papa"+ss;
	
	//add data to array
	arr.push(ss);
	ss++;
	a.appendChild(c);
	console.log(arr);
	var inp=$('<input type="hidden" id="inp'+ss+'"/>')
}


//console.log(arr);	
	
function deleterow(ass) {
	var pqr = document.getElementById('add');
	var tt =  document.getElementById('papa'+ass);
	pqr.removeChild(tt);
}

function save(){
	
	var privilege_id=$('#privilege_id').val();
	var tbody=$('#abcd tbody');
	
	if(privilege_id==""){
			iziToast.error({
			    title: 'privilege!',
			    message: 'please select privilege',
			    position: 'topRight'
			  });
			$('#privilege_id').focus();
			return false;
	}
	

	if (tbody.children().length == 0) {
		iziToast.error({
		    title: 'Add row!',
		    message: 'please click on add row button',
		    position: 'topRight',
		});
		$('#ad_row').html('pl click and add row').addClass("text-danger");
		return false;
	}
	
	if($('#ad_row').html()!=""){
		$('#ad_row').html('');
	}
	//console.log(arr);
	var privilege_id=$('#privilege_id').val();
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
				//$('#add_form').modal('hide');
			}
		}
	});
}

