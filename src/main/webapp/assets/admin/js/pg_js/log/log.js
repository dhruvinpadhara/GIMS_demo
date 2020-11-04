window.onload=function()
{
	$('#sample').DataTable({
		  dom: 'Bfrtip',
		  buttons: [
		    'copy', 'csv', 'excel', 'pdf', 'print'
		  ], ajax : "get_data_wflag.py?model=Log_model",
            	columns : [ {
            		"data" : "log_id"
            	},{
            		"data" : "emp_id.empname"
            	},{
            		"data" : "cid.cname"
            	},{
            		"data" : "rid.rname"
            	},{
            		/*"data" : "dt"*/
            		"render": function (data, type, JsonResultRow, meta) {//mimage using for database model vastu
            			var ldate=new Date(JsonResultRow.dt);
            			var date=ldate.getDate();
            			var month=ldate.getMonth()+1;
            			var year=ldate.getFullYear();
            			var hour=ldate.getHours();
            			var minute=ldate.getMinutes();
            			var second=ldate.getSeconds();
            			
            			var log_Date=date+"-"+month+"-"+year+" Time "+hour+":"+minute+":"+second;
            			//console.log(date+"/"+month+"/"+year+" Time:"+hour+":"+minute+":"+second);
            			return log_Date;
            			//default date
            			//return new Date(JsonResultRow.dt);/*'<img style = "height:100px;width:100px" src="upload/'+JsonResultRow.mimage+'">';*/
                    }
            	}],
            });
}