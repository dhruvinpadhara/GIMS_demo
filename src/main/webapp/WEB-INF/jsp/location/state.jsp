<%@taglib uri="http://java.sun.com/jstl/core" prefix="c" %>

         <div class="card">
           <div class="card-header">
             <h4>State table</h4>
           </div>
           <div class="card-body">
             <div class="table-responsive">
               <table class="table" id="sample">
                 <thead>
                   <tr>
                     <th>No</th>
                     <th>State name</th>
                     <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
					                 
				</tbody>
               </table>
             </div>
           </div>
         </div>

<div style="position: fixed;bottom: 20px;right:15px;z-index:1"><input type="button" id="add_button" class="btn btn-danger" data-toggle="modal" data-target="#add_form" value="+"></div>

 <div class="modal fade" id="add_form" tabindex="-1" role="dialog" aria-labelledby="formModal"
   aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="formModal">State</h5>
         <button data-dismiss="modal" class="close" onclick="res()" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <form id="state_form" autocomplete="off" method="post">
         	<input type="hidden" id="state_id" name="sid" value=0>
               <div class="form-group">
	               <label>Enter State Name</label>
	               <input type="text" class="form-control" name="sname" id="state_name" placeholder="enter state name">
               </div>
               
            <div>
               <input class="btn btn-success float-right" type="button" onclick="return save()" value="ADD" />
               <button class="btn btn-danger" type="button" onclick="res()" data-dismiss="modal">Cancel</button>
            </div>
           </form>
       </div>
     </div>
   </div>
 </div>
 <script src="<c:url value='assets/admin/js/pg_js/location/state.js' />"></script>