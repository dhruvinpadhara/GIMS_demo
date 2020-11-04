<%@taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
     <p>
            <button id="add" onclick="show()" type="button" class="btn btn-success btn-labeled btn-labeled-left btn-sm"><b><i class="icon-plus2"></i></b> Add unit</button>
         </p>
     <div class="card">   
        <div class="card-header header-elements-inline">
        	<h5 class="card-title">Unit</h5>
        </div>
        <div class="card-body">
		       <div class="table-responsive">
		           <table class="table" id="sample">
		             <thead>
		               <tr>
		                 <th>No</th>
		                 <th>Unit name</th>
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
         <h5 class="modal-title" id="formModal">Unit</h5>
         <button class="close" onclick="res()" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <form id="unit_form" autocomplete="off">
         	<input type="hidden" id="unit_id" name="id" value=0>
               <div class="form-group">
	               <label>Unit name</label>
	               <input type="text" class="form-control" name="unit_name" id="unit_name" placeholder="enter unit name">
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

 <script src="<c:url value='assets/admin/js/pg_js/material/unit.js' />"></script>
 