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

function emp(id){
	$.ajax({
	  		url:'dmodelwithid.db',
	  		method:'POST',
	  		data: {'model':'Employee_model','fname':'rid','id':id} ,
	  		success:function(data)
	  		{
	  			$('#empl_id').html('');
	  			
	  			var optionf = $('<option/>');
				optionf.attr('value',"").text("select Employee");
				$('#empl_id').append(optionf);
	  			
				var obj=data.data;
				$(obj).each(function()
				{
					var option = $('<option />');
					option.attr('value', this.emp_id).text(this.name);           
					$('#empl_id').append(option);
	         	});
	  		}		
	  	});
		setTimeout(function(){
//			priv_role(id);
			privlege(id);
		},300);
	}


function privlege(id) {
	$.ajax({
		url:'distinctWithId.db',
		method:'POST',
		data: {'model':'Assi_priv_to_role','col':'pid','fname':'rid','id':id},
		success:function(data)
		{
			$('#prvlist').html('');
			var obj=data.data;
			console.log(data);
			$(obj).each(function()
			{
				var li = $('<li><input type="checkbox" name="privilege" onclick="priv_comp('+this.pid+')" class="all" id="'+this.pid+'" value="' + this.pid + '"/>' +
			               '<label style="padding-left: 20px;" for="' + this.pname + '"></label></li>');
				li.find('label').text(this.pname);           
				$('#prvlist').append(li);
         	});
		}
	});
}


function priv_comp(id){
//	alert(id);
	if($("#"+id).is(":checked")==true){
		$.ajax({
			url:'dmodelwithid.db',
	  		method:'POST',
			data: {'model':'Assi_priv_to_role','fname':'pid','id':id} ,
			success:function(data)
			{
//				console.log(data);
				var obj=data.data;
				$(obj).each(function()
				{
					var li = $('<li class="priv_compli'+id+'"><input type="checkbox" onclick="check_Access('+id+','+this.cid.cid+')" name="priv_comp'+id+'" class="prvc_comp'+id+'" value="' + this.cid.cid + '"/>' +
				               '<label style="padding-left: 20px;" for="' + this.cid.pname + '"></label></li>');
					li.find('label').text(this.cid.cname);           
					$('#sub_comp').append(li);
				
					var acc = this.access;
					var spl = acc.split(",");
					
//					console.log(spl);

					for (var i = 0; i < spl.length -1; i++) {
						
//						console.log(spl.length-1);					
						var li1 = null;
						if (spl.length -2 == i) {
							li1 = $('<li class="d-inline acsli'+id+'"><input class="acs'+id+' ml-3" value="'+spl[i]+'" name="access'+id+''+this.cid.cid+'" type="checkbox" />' +
				            '<label style="padding-left: 20px;">create</label></li> <br class="acsli'+id+'">');
							li1.find('label').text(spl[i]);
						}else{
							li1 = $('<li class="d-inline acsli'+id+'"><input class="acs'+id+' ml-3" value="'+spl[i]+'" name="access'+id+''+this.cid.cid+'" type="checkbox" />' +
				            '<label style="padding-left: 20px;">create</label></li>');
							li1.find('label').text(spl[i]);
						}
					
						$('#acs_box').append(li1);
						
						
	//					var li1 = $('<li class="col-md-3"><input class="all acs" name="lol'+this.pid+''+this.cid+'" type="checkbox" />' +
	//		            '<label style="padding-left: 20px;">create</label></li>');
	//					li1.find('label').text(spl[i]);
	//					
	//					
	//					if(spl.length-2 == i){
	//						console.log(spl.length-1);
	//						var br=$('<br/>');
	//						$("[name='lol']"+this.pid.pid+this.cid.cid).append(br);
	//					}
	//					
	//					$('#acs_box').append(li1);
						
					}
					
			//		$('#acs_box').append(div);
					setTimeout(function(){
						$('.prvc_comp'+id+'').prop('checked',true);
						$('.acs'+id+'').prop('checked',true);
					},300)
					
			 	});
			}
		});	
	}
	else if($("#"+id).is(":checked")==false){
		$('[name="priv_comp'+id+'"]').remove();
		$('.priv_compli'+id+'').remove();
		$('.acsli'+id+'').remove();
	}
	else {
		if(isEmpty($('#sub_comp').html())){
			$('#sub_comp').html('');
			$('#acs_box').html('');
		}
	}
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
}

function res(){
	$('#assi_priv_user')[0].reset();
	$('#sub_comp').html('');
	$('#acs_box').html('');
}

function save(){
	$.ajax({
		url : 'assi_priv_user.db',
		method : 'POST',
		data : $('#assi_priv_user').serialize(),
		success : function(ret){
			if (ret.input) {
				swal("Good", "Success Fully", "success");
				$('#assi_priv_user')[0].reset();
				$('#sub_comp').html('');
				$('#acs_box').html('');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#assi_priv_user')[0].reset();
				$('#sub_comp').html('');
				$('#acs_box').html('');
			}
		}
	});
}