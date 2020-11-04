show();
function show(){
$.ajax({
  		url:'dmodel.db',
  		method:'POST',
  		data: {'model':'Role_model'} ,
  		success:function(data)
  		{
  			$('#role_id').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',0).text("select Role");
			$('#role_id').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.rid).text(this.rname);           
				$('#role_id').append(option);
         	});
  		}		
  	});
}

privilege();
function privilege() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'Privilege_model'},
		success:function(data)
		{
			var obj=data.data;
			$(obj).each(function()
			{
				var li = $('<li><input type="checkbox" onclick=sub_model('+this.pid+') class="all" id="'+this.pid+'" name="privlege" value="' + this.pid + '"/>' +
			               '<label style="padding-left: 20px;" for="' + this.pname + '"></label></li>');
				li.find('label').text(this.pname);           
				$('#wkslist').append(li);
		
         	});
		}
	});
}

//sub component checkbox
function sub_model(id){
	//alert("privlege id is :"+id);
	if($("#"+id).is(":checked")==true){
		$('#prvccomp').html("Select Privilege Component");
		//console.log("privlege id is :"+id);
		$.ajax({
			url:'dmodelwithid.db',
			method:'POST',
			data: {'model':'Privillege_component_model','fname':'pid','id':id} ,
			success:function(data)
			{
				//console.log(data);
				
				var obj=data.data;
				$(obj).each(function()
				{
					/*onclick="acs_checkbox('+id+','+this.cid+')"*/
					var li = $('<li class="priv_compli'+id+'"><input type="checkbox" id="'+this.cid+'" onclick="check_Access('+id+','+this.cid+')" class="prvc_comp'+id+'" name="priv_comp'+id+'" value="' + this.cid + '"/>' +
				               '<label class="priv_comp'+id+'" style="padding-left: 20px;" for="' + this.cname + '"></label></li>');
					li.find('label').text(this.cname);           
					$('#sub_comp').append(li);
					acs_checkbox(id,this.cid);
	         	});
				setTimeout(function(){
					$('.prvc_comp'+id+'').prop('checked',true);
				},300);
			}
		});
	}else if($("#"+id).is(":checked")==false){
		$('[name="priv_comp'+id+'"]').remove();
		$('.priv_compli'+id+'').remove();
		$('.acsli'+id+'').remove();
	}
	else {
		if(isEmpty($('#sub_comp').html())){
			$('#prvccomp').html('');
			$('#acscomp').html('');
		}
	}
	
}


function acs_checkbox(pid,cid){
	/*if($('#acs_box').html()==""){*/
		$('#acscomp').html("Select Access Component");
		var li1 = $('<li class="col-md-3 acsli'+pid+'"><input type="checkbox" class="acs'+pid+'" name="access'+pid+''+cid+'" value="create"/>' +
	            '<label style="padding-left: 20px;" for="create" class="acs'+pid+'">create</label></li>');
		/*li1.find('label').text("create");*/
		var li2 = $('<li class="col-md-3 float-left acsli'+pid+'"><input type="checkbox" class="acs'+pid+'" name="access'+pid+''+cid+'" value="read"/>' +
	    '<label style="padding-left: 20px;" for="read" class="acs'+pid+'">Read</label></li>');
		
		var li3 = $('<li class="col-md-3 float-left acsli'+pid+'"><input type="checkbox" class="acs'+pid+'" name="access'+pid+''+cid+'" value="update"/>' +
	    '<label style="padding-left: 20px;" for="update" class="acs'+pid+'">Update</label></li>');
		
		var li4 = $('<li class="col-md-3 float-left acsli'+pid+'"><input type="checkbox" class="acs'+pid+'" name="access'+pid+''+cid+'" value="delete"/>' +
		'<label style="padding-left: 20px;" for="delete" class="acs'+pid+'">Delete</label></li>');
		
		//var br=$('<br>');
		//var br1=$('<br>');
		$('#acs_box').append(li1,li2,li3,li4);
		setTimeout(function(){
			$('.acs'+pid+'').prop('checked',true);
		},300)
	/*}else{
		
	}*/
}

function check_Access(pid,cid){
	if($('[name="access'+pid+''+cid+'"]').is(":checked")){
		$('[name="access'+pid+''+cid+'"]').prop('checked',false);
	}else{
		$('[name="access'+pid+''+cid+'"]').prop('checked',true);
	}
}

function sell(){
	if($('#all_checked').is(":checked")){
		$('.all').prop('checked',true)
	}else{
		$('.all').prop('checked',false);
	}
	/*if($('.all').is(":checked")){
		$('.all').prop('checked',false)
	}else{
		$('.all').prop('checked',true);
	}*/
}

function check(id){
	//alert(id);
	$.ajax({
  		url:'dmodelwithid.db',
  		method:'POST',
  		data: {'model':'Assi_priv_to_role','fname':'rid','id':id} ,
  		success:function(data)
  		{	
  			$('.all').prop('checked',false);
			
  			//console.log(data.data[0].pid.pid);
  			
  			var all_val	=[];
  			
			$.each($("input[name='privlege']"),function(){
				all_val.push($(this).val());
			//	console.log("privlege"+$(this).val());
			});	
			
			console.log("");
			//console.log("assi_priv_role:"+data.data[0].asptoroleid);
			for (var i=0;i<all_val.length;i++)
			{
				//console.log("all value "+all_val[i]);
				
				var flag='false';
				for(var j=0;j<data.data.length;j++)
				{	
					if(all_val[i]==data.data[j].pid.pid)
					{
					//	console.log(all_val[i]+" assi_priv_role:"+data.data[j].pid.pid)
						
						$("#"+all_val[i]).prop('checked',true);
						flag='true';
						break;
					}
				}
			}
  		}		
  	});
}

function save(){
	$.ajax({
		url : 'assi_priv_to_role.db',
		method : 'POST',
		data : $('#assi_to_role').serialize(),
		success : function(ret){
			if (ret.input) {
				swal("Good", "Success Fully", "success");
				$('#assi_to_role')[0].reset();
				$('#sub_comp').html('')
				$('#acs_box').html('');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#assi_to_role')[0].reset();
				$('#sub_comp').html('')
				$('#acs_box').html('');
			}
		}
	});
}
