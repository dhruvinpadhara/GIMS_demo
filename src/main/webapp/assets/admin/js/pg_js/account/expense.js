var table='';
window.onload=function()
{
	table =$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data.db?model=Expense_model",
            	columns : [ {
            		"data" : "expense_id"
            	},{
            		"data" : "party_code"
            	},{
            		"data" : "expense_name"
            	},{
            		"data" : "accountId.account_name"
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
		
		$('[name = "id"]').val(data["expense_id"]);
		$('[name = "pcode"]').val(data["party_code"]);
		$('[name = "expensename"]').val(data["expense_name"]);
		
		
		var accid = data["accountId"];
		var gpid = data["groupId"];
		
		var accountId = accid["account_id"];
		var accountName = accid["account_name"];
		
		var groupId = gpid["group_id"];
		var groupName = gpid["group_name"];
		
		$('#accounts_id option:first').val(accountId).html(accountId); //this
		$('#accounts_id:first').attr('selected','selected');
		
		$('#gpid option:first').val(groupId).html(groupName); //this
		$('#gpid:first').attr('selected','selected');
		
		
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
	            		  data:{'id':data["expenseId"],'fname':'expenseId','model':'ExpenseModel'},
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


account();
function account() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'Account_model'},
		success:function(data)
		{
			$('#accounts_id').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',0).text("select Account");
			$('#accounts_id').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.account_id).text(this.account_name);           
				$('#accounts_id').append(option);
         	});
		}		
	});
}

function res(){
	$('#group_id').val(0);
	$('#exp_form')[0].reset();
	$('#add_form').modal('hide');
	group();
	account();
}


group();
function group() {
	$.ajax({
		url:'dmodel.db',
		method:'POST',
		data: {'model':'Group_model'},
		success:function(data)
		{
			$('#gpid').html('');
  			
  			var optionf = $('<option/>');
			optionf.attr('value',0).text("select Group");
			$('#gpid').append(optionf);
  			
			var obj=data.data;
			$(obj).each(function()
			{
				var option = $('<option />');
				option.attr('value', this.group_id).text(this.group_name);           
				$('#gpid').append(option);
         	});
		}		
	});
}

function save(){
	var partycode=$('[name = "pcode"]');
	var expensename=$('[name = "expensename"]');
	var acc_group=document.getElementById('accounts_id');
	var acc_acctype=document.getElementById('gpid');
	
	
	if(empty_data(partycode,"party code")){
				 if(empty_data(expensename,"expensename")){
					 if(dynamicDropdown(acc_group,"Account")){
						 if(dynamicDropdown(acc_acctype,"Group")){
							 
						 }else{ return false;}
					 }else{ return false;}
				 }else { return false; }
	}else{ return false; }


	$.ajax({
		url : 'expense.db',
		method : 'POST',
		data : $('#exp_form').serialize(),
		success : function(ret){
			if (ret.input) {
			//	table.ajax.reload();
				swal("Good", "Success Fully", "success");
				$('#exp_form')[0].reset();
				$('#group_id').val(0);
				$('#add_form').modal('hide');
			}else{
				swal("sorry!", "successfully not inserted data!!", "error");
				$('#exp_form')[0].reset();
				$('#add_form').modal('hide');
			}
		}
	});
}

function dynamicDropdown(ucountry,name) {
    if (ucountry.value == "") {
    	iziToast.error({
    	    title: ' Select '+name+'',
    	    message: 'select from the list',
    	    position: 'topRight'
    	  });
        ucountry.focus();
        return false;
    } else {
        return true;
    }
}