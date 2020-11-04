//access


//console.log(access);
	
function access1(){
//	var access=$('#access').val();
//	//alert("malyu");
////	alert(acs);
//	console.log("malyu");
//	var acs=access.split(",");
////	console.log(acs);
//
//	if(!acs.includes("create")){
//		$('#add').remove();
//		//console.log("remove by created");
//	}
//	if(!acs.includes("read")){
//		$('.table').remove();
//	}
//	if(!acs.includes("update")){
//		$('.update1').remove();
////		console.log("updated");
//	}
//	if(!acs.includes("delete")){
//		$('.delete1').remove();
////		console.log("deleted");
//	}

}

//sidebar
var empl_id;
setTimeout(function(){
	empl_id=$('#emp_id').val();
	getprivilege();
},100)

function getprivilege(){
//	console.log(empl_id);
	$.ajax({
  		url:'dmodelwithid.db',
  		method:'POST',
  		data: {'model':'Assi_priv_user','fname':'emp_id','id':empl_id},
  		
  		success:function(data)
  		{
  			var ul=$(".nav-sidebar");
  			var obj=data.data;
			$(obj).each(function()
			{
				var li=$("<li></li>").addClass("nav-item nav-item-submenu");
				//console.log('li');
				var a=$("<a></a>").addClass("nav-link");
				var i=$("<i></i>").addClass(this.pid.font_code);
         		
				var span=$("<span></span>").text(this.pid.pname);
				//i.append(span);
				
         		a.append(i);
         		a.append(span);
         		//a.append(this.pid.pname);
				
         		//var number=1;
         		
				var ul2 = $("<ul></ul>").addClass("nav nav-group-sub");
				a.on( "click", function() {                       
//                    a.toggleClass("active");
                    li.toggleClass("nav-item-open");                    
                    ul2.toggleClass("inner");            
                });
				
				//var prvid=this.pid;
				//console.log("prv id"+prvid);
				
				$.ajax({
                    url:'dmodelwithid.db',
                    type:'POST',
                    data: {'model':'Assi_priv_to_role','fname':'pid','id':this.pid.pid},
                    success:function(dat)
                    {   
//                        console.log(dat);
                    	$(dat.data).each(function(){                    
                             
                    		var li2 = $("<li></li>").addClass("nav-item");
                    		var a2 = $("<a></a>").addClass("nav-link");
                    		//var a2 = $("<a></a>").addClass("nav-link");
                    		a2.html(this.cid.cname);
                    		a2.attr("href",this.cid.clink);
                    		var str="' "+this.access+" '";
//                    		console.log(str);
                    		a2.attr("onclick","show_log("+empl_id+","+this.rid.rid+","+this.cid.cid+","+str+")");
                    		li2.append(a2);      
                    		ul2.append(li2);                                   
                            
                    	}); 
                    }
                }); 

				li.append(a);
				li.append(ul2);
				$(ul).append(li); 
	         	
			});
			
  		}		
  	}); 
}
    


function show_log(user_id,role_id,component_id,acs_fun){
//	alert("user_id:"+user_id+" role_id:"+user_id+" component_id:"+component_id+" access:"+acs_fun.trim());
//	alert("user_id:"+user_id+" role_id:"+role_id+" component_id:"+component_id);
	$.ajax({
		url : 'log.db',
		method : 'POST',
		data :{"uid":user_id,"rid":role_id,"cid":component_id,"accs":acs_fun.trim()} ,
		success : function(ret){
		}
	});
}
    
    
    

//empty value check
function empty_data(empty_val,name){
	var emptyval=empty_val.val();
	//alert(emptyval);
	//console.log(emptyval);
		if(emptyval==""){
			iziToast.error({
	    	    title: ''+name+' is Required ',
	    	    message: 'please enter '+name+'!!!',
	    	    position: 'topRight'
	    	  });
	        empty_val.focus();
	      return false;
		}
		else{
			return true;
		}
}
    
//check String value
function allLetter(username,name){
	var regex=/^[a-zA-Z ]*$/;
	if(username.val().match(regex)){
		return true;
	}
	else{	iziToast.error({
    	    title: ' Enter proper '+name+'',
    	    message: 'contain only string [A-Za-z and space]!!!',
    	    position: 'topRight'
    	  });
        username.focus();
        return false;
	}
}
    
/*	var tablebody=$('#table_name tbody');
  	var span=$('#ad_row');
	var tbpody=add_row_check(tbody,span);*/
    
function add_row_check(tablebody,span){
    if (tablebody.children().length == 0) {
		iziToast.error({
		    title: 'Add row!',
		    message: 'please click on add row button',
		    position: 'topRight',
		});
		$(span).html('pl click and add row').addClass("text-danger");
		return false;
	}
}


//var gender=$('[name="gender"]:checked');

//console.log(gender);
//check radio
function radio(radio,span){
    if(radio.length == 0){
		  iziToast.error({
		    title: 'Pl select gender!',
		    message: 'sdfsf',
		    position: 'topRight'
		  });
		  $(span).html('select gender').addClass("text-danger");
		  return false;
    }
}

//email
function email(emp_email){
	var email=emp_email.val();
  	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		//^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (reg.test(email) == false) 
	{
		 iziToast.error({
		    title: 'invalid email_id!',
		    message: 'enter the particular email',
		    position: 'topRight'
		  });
		 $(emp_email).focus();
	  return false;
	}
}

//pincode
function zipcode(pincode){
	var regex2=/^[1-9][0-9]{5}/;
	
	zipcod=pincode.val();
	
	if(regex2.test(zipcod)){
		return true;
	}else{
		iziToast.error({
		    title: 'validate fail!',
		    message: 'enter valid pincode value',
		    position: 'topRight'
		  });
		$(pincode).focus();
		return false;
	}
}


//mobile number
function mobile(mnumber1){
	var mnum=/^[0]?[6789]\d{9}$/;
	
	var mobile_number=mnumber1.val();
	
	if(mnum.test(mobile_number) == false){
		iziToast.error({
		 title: 'invalid mobile number!',
		 message: 'enter the particular number',
		 position: 'topRight'
		});
	$(mnumber1).focus();
	return false;
	}
}


/*create();
function create(){
	var cr=$('#create').val();
	console.log(cr);
	if(cr!=""){
		$('#add_button').hide();
	}
}*/

/*//update();

function update(){
	var up=$('#update').val();
	console.log(up);
	if(up!=""){
		$('a #update').remove();
	}
}*/
/*
var id=$('#ses_id').val();
//alert(id);
var user_id=$('#user_id').val();
getprivilege();
    function getprivilege(){    
		 $.ajax({
	  		url:'dmodelwithid.py',
	  		method:'POST',
	  		data: {'model':'Assi_priv_to_role','fname':'rid','id':id},
	  		
	  		success:function(data)
	  		{
	  			var ul=$('.sidebar-menu');
	  			var obj=data.data;
				$(obj).each(function()
				{
					var li=$("<li></li>").addClass("dropdown");
					//console.log('li');
					var a=$("<a></a>").addClass("nav-link has-dropdown");
					var i=$("<i></i>").addClass(this.pid.font_code);
	         		
					var span=$("<span></span>").text(this.pid.pname).addClass("ml-3");
					//i.append(span);
					
	         		a.append(i);
	         		a.append(span);
	         		//a.append(this.pid.pname);
					
	         		//var number=1;
	         		
					var ul2 = $("<ul></ul>").addClass("dropdown-menu");
					a.on( "click", function() {                       
	                    a.toggleClass("active");
	                    li.toggleClass("active");                    
	                    ul2.toggleClass("in");            
	                });
					
					$.ajax({
	                    url:'dmodelwithid.py',
	                    type:'POST',
	                    data: {'model':'Privillege_component_model','fname':'pid','id':this.pid.pid},
	                    success:function(dat)
	                    {      
	                    	$(dat.data).each(function(){                    
	                    		//console.log("component name: "+this.cname+" link:"+this.clink);
	                             
	                    		var li2 = $("<li></li>");
	                    		var a2 = $("<a></a>");
	                    		//var a2 = $("<a></a>").addClass("nav-link");
	                    		a2.html(this.cname);
	                    		a2.attr("href","#")
	                    		//a2.attr("href",this.clink);
	                    		//a2.attr("onclick","show_log("+user_id+","+id+","+this.cid+")");
	                    		
	               
	                    		$.ajax({
	        	                    url:'dmodelwithid.py',
	        	                    type:'POST',
	        	                    data: {'model':'Privilege_comp_comp_model','fname':'cid','id':this.cid},
	        	                    success:function(da)
	        	                    {      
	        	                    	//a2.addClass("has-dropdown");
	        	                    	var ul3 = $("<ul></ul>").addClass("dropdown-menu");	
	        	                    	a2.on( "click", function() {                       
	        	                    		//a2.addClass("has-dropdown");
	        	                    		a2.toggleClass("active");
	        	    	                    li2.toggleClass("active");                    
	        	    	                    ul3.toggleClass("in");            
	        	    	                });
	        	                    	$(da.data).each(function(){     
	        	                    		console.log("privlege comp od comp:"+this.pccid+" cname:"+this.cname+
	        	                    				" clink:"+this.clink+" master details cid"+
	        	                    				this.cid.cid+" cname:"+this.cid.cname+" clink:"+this.cid.clink);
	        	                    		var li3 = $("<li></li>");
	        	                    		var a3 = $("<a></a>");
	        	                    		//var a3 = $("<a></a>").addClass("nav-link");
	        	                    		
	        	                    		a3.html(this.cname);
	        	                    		a3.attr("href",this.clink);
	        	                    		
	        	                    		
	        	                    		
	        	                    		li3.append(a3);
	        	                    		ul3.append(li3);
	        	                    		li2.append(ul3);
	        	                    		
	        	                    		//complete output
	        	                    		//li3.append(a3);
	        	                    		//li2.append(li3);
	        	                    		
	        	                    		//li3.append(a3);
	        	                    		
	        	                    		//ul2.append(li3);
	        	                    		//li2.append(ul3);
	        	                    		//li2.append(ul3);      
	        	                    		//ul2.append(li3);
	        	                    	}); 
	        	                    }
	        	                });
	                    		li2.append(a2);      
	                    		ul2.append(li2);                                   
	                            
	                    	}); 
	                    }
	                }); 
					//a.attr("href","javascript:void(0)")
					li.append(a);
					li.append(ul2);
					$(ul).append(li); 
		         	
				});
				
	  		}		
	  	}); 
	}
    
    function show_log(user_id,role_id,component_id){
    	//alert("user_id:"+user_id+" role_id:"+role_id+" component_id:"+component_id);
    	$.ajax({
    		url : 'log.py',
    		method : 'POST',
    		data :{"uid":user_id,"rid":role_id,"cid":component_id} ,
    		success : function(ret){
    		}
    	});
    }
*/