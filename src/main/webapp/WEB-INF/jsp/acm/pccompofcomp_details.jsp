<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
	         <div class="card">
	           <div class="card-header">
	             <h4>Privilege Component of Component details</h4>
	           </div>
	           <div class="ml-3">
					<button class="btn btn-primary" type="button" onclick="show()">Add Privilege Component</button>
				</div>
	           <div class="card-body">
	            	<div class="table-responsive">
               <table class="table" id="sample" >
                 <thead>
                   <tr>
                     <th>No</th>
                     <th>Component Name</th>
                     <th>Component Link</th>
                     <th>Privilege Name</th>
                     <th>Privilege Component Name</th>
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
   <div class="modal-dialog modal-lg" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="formModal">Privilege Component of Component details</h5>
         <button class="close" onclick="res()" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <form id="privcofcomp_form" autocomplete="off">
         	<input type="hidden" id="privcofcomp_id" name="id" value=0>
         	<div class="form-group">
                 <label>Select Privilege</label>
                 <br>
                 <select class="form-control" onchange="check(this.value)" name="privilege" id="privilege_id">
                 		
                 </select>
	        </div>
	        <div class="form-group">
                 <label>Select Privilege Components</label>
                 <br>
                 <select class="form-control prvcid" name="prvcname" id="privilege_component">
                 		
                 </select>
	        </div>
	        <div class="form-group">
        	   <label>component name</label>
               <input type="text" class="form-control" name="cname" id="component_name" placeholder="enter component name">
	        </div>
	        <div class="form-group">
        	   <label>component link</label>
               <input type="text" class="form-control" name="clink" id="component_link" placeholder="enter component link">
	        </div>
	        <div class="">
               <button class="btn btn-success float-right" type="button" onclick="save()">Save</button>
               <button class="btn btn-danger" type="button" onclick="res()">Cancel</button>
             </div>
           </form>
       </div>
     </div>
   </div>
 </div>
 
 <input type="text" id="pccompofcompid" name="pccid" value="${sessionScope.pccid}">
 <c:if test="${sessionScope.pccid ne null }">
	<c:remove var="pccid" scope="session"/> 	
 </c:if>
 <script src="<c:url value='assets/admin/js/pg_js/acm/pccompofcomp_details.js' />"></script>
  	      