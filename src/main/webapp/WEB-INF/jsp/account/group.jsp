<%@taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
     <p>
            <button id="add" onclick="show()" type="button" class="btn btn-success btn-labeled btn-labeled-left btn-sm"><b><i class="icon-plus2"></i></b> Add Group</button>
         </p>
     <div class="card">   
        <div class="card-header header-elements-inline">
        	<h5 class="card-title">Accounts</h5>
        </div>
        <div class="card-body">
		       <div class="table-responsive">
		           <table class="table" id="sample">
		             <thead>
		               <tr>
		                 <th>No</th>
		                 <th>Group name</th>
		                 <th>Group Code</th>
		                 <th>Group description</th>
		                 <th class="action">Action</th>
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
         <h5 class="modal-title" id="formModal">Group</h5>
         <button class="close" onclick="res()" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <form id="group_form" autocomplete="off">
         	<input type="hidden" id="group_id" name="id" value=0>
               <div class="form-group">
	               <label>Group name</label>
	               <input type="text" class="form-control" name="gname" id="group_name" placeholder="enter account name">
               </div>
               <div class="form-group">
	               <label>Group code</label>
	               <input type="text" class="form-control" name="gcode" id="group_code" placeholder="group code ex.G-110">
               </div>
               <div class="form-group">
	               <label>Group Description</label>
	               <input type="text" class="form-control" name="gdesc" id="group_desc" placeholder="enter account description">
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

 <script src="<c:url value='assets/admin/js/pg_js/account/group.js' />"></script>
 