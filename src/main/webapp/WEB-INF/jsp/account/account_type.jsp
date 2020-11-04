<%@taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
     <p>
            <button id="add"  onclick="show()" type="button" class="btn btn-success btn-labeled btn-labeled-left btn-sm"><b><i class="icon-plus2"></i></b>Add Account Type</button>
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
		                 <th>Account name</th>
		                 <th>Account description</th>
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
         <h5 class="modal-title" id="formModal">Role</h5>
         <button class="close" onclick="res()" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <form id="account_form" autocomplete="off">
         	<input type="hidden" id="account_id" name="id" value=0>
               <div class="form-group">
	               <label>Account name</label>
	               <input type="text" class="form-control" name="acname" id="account_name" placeholder="enter account name">
               </div>
               <div class="form-group">
	               <label>Account Description</label>
	               <input type="text" class="form-control" name="acdesc" id="account_desc" placeholder="enter account description">
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

 <script src="<c:url value='assets/admin/js/pg_js/account/account_type.js' />"></script>
 