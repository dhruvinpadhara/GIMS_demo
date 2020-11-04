<%@taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<p>
      <button id="add" onclick="show()" type="button" class="btn btn-success btn-labeled btn-labeled-left btn-sm"><b><i class="icon-plus2"></i></b>Add Privilege</button>
</p>
<div class="card">   
        <div class="card-header header-elements-inline">
        	<h5 class="card-title">Privilege</h5>
        </div>
        <div class="card-body">
		       <div class="table-responsive">
               <table class="table" id="sample">
                 <thead>
                   <tr>
                     <th>No</th>
                     <th>Privilege name</th>
                     <th>location</th>
                     <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
					                 
				</tbody>
               </table>
             </div>
         </div>
</div>

 <div class="modal fade" id="add_form" tabindex="-1" role="dialog" aria-labelledby="formModal"
   aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="formModal">Privilege</h5>
         <button class="close" onclick="res()" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <form id="privilege_form" autocomplete="off">
         	<input type="hidden" id="privilege_id" name="id" value=0>
               <div class="form-group">
	               <label>Privilege name</label>
	               <input type="text" class="form-control" name="pname" id="privilege_name" placeholder="enter privilege name">
               </div>
               <div class="form-group">
					<label>Select Location</label>
	                  <br>
	                  <select class="form-control" name="location" id="location_id" style="width:100% !important">	
	                  		<option value="">select location</option>
	                  		<option value="left_top">left-Top</option>
	                  		<option value="left_bottom">left-Bottom</option>
	                  		<option value="center_top">center-Top</option>
	                  		<option value="center_bottom">center-Bottom</option>
	                  		<option value="right_top">right-Top</option>
	                  		<option value="right_bottom">right-Bottom</option>
	                  </select>
		         </div>
               
               <div class="form-group">
	               <label>Font_code</label>
	               <input type="text" class="form-control" name="font_code" id="privilege_font" placeholder="enter privilege fontcode">
               </div>
            <div class="">
               <input class="btn btn-success float-right" type="button" onclick="return save()" value="ADD" />
               <button class="btn btn-danger" type="button" onclick="res()">Cancel</button>
             </div>
           </form>
       </div>
     </div>
   </div>
 </div>
 <script src="<c:url value='assets/admin/js/pg_js/acm/privilege.js' />"></script>