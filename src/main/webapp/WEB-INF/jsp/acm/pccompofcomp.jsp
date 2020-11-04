<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<section class="section">
       <div class="section-body">
         <div class="row">
	       <div class="col-12">
	         <div class="card">
	           <div class="card-header">
	             <h4>Privilege Component Details</h4>
	           </div>
	           <div class="ml-3">
					<button class="btn btn-primary" data-target="#add_form" data-toggle="modal">Add Privilege Component</button>
				</div>
	           <div class="card-body">
	            	<div class="table-responsive">
               <table class="table" id="sample" style="width:100%;">
                 <thead>
                   <tr>
                     <th>No</th>
                     <th>Component Name</th>
                     <th>Component Link</th>
                     <th>Privilege Name</th>
                     <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
					                 
				</tbody>
               </table>
             </div>
            	</div>
        	  </div>
    		</div>
		</div>
	</div>
</section>

<div class="modal fade" id="add_form" tabindex="-1" role="dialog" aria-labelledby="formModal"
   aria-hidden="true">
   <div class="modal-dialog modal-lg" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="formModal">Privilege</h5>
         <button data-dismiss="modal" class="close" onclick="res()" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <form id="privilege_component_form" autocomplete="off">
         	<input type="hidden" id="privilege_component_id" name="id" value=0>
	        <div class="row">	
	         	<div class="form-group col-md-6">
	                 <label>Select Privilege</label>
	                 <br>
	                 <select class="form-control privlege" onchange="check(this.value)" name="privilege" id="privilege_id">
	                 		
	                 </select>
		        </div>
		        <div id="prvcdata">
		        
		        </div>
		    </div>
	        <div class="row">    
	            <table class="table" id="abcd">
					<thead>
						<tr>
							<th>privilege component name</th>
							<th>privilege component link</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody id="add">
						
					</tbody>
					<tfoot>
						<tr>
							<td><button class="btn btn-primary" id="addrow" type="button" onclick="addprvi()" >Addrow</button><br/><span id="ad_row"></span></td>
							<td><button class="btn btn-success" type="button" onclick="save()">Add Component</button></td>
							<td><button class="btn btn-dark" type="button" onclick="res()">Close</button></td>
						</tr>
					
	            	</tfoot>
	            </table>   
	       </div>
           </form>
       </div>
     </div>
   </div>
 </div>
 
 <div class="modal fade" id="update_form" tabindex="-1" role="dialog" aria-labelledby="formModal"
   aria-hidden="true">
   <div class="modal-dialog modal-lg" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="formModal">Privilege</h5>
         <button class="close" onclick="resuppriv()" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <form id="privilege_component_form1" autocomplete="off">
         	<input type="hidden" id="privilege_component_id1" name="compid" value=0>
         	<div class="form-group">
                 <label>Select Privilege</label>
                 <br>
                 <select class="form-control privlege" name="privilege" id="privilege_id1">
                 		
                 </select>
	        </div>
	        <div class="form-group">
        	   <label>component name</label>
               <input type="text" class="form-control" name="compname" id="component_name" placeholder="enter component name">
	        </div>
	        <div class="form-group">
        	   <label>component link</label>
               <input type="text" class="form-control" name="complink" id="component_link" placeholder="enter component link">
	        </div>
	        <div class="">
               <button class="btn btn-success float-right" type="button" onclick="savecomp()">Save</button>
               <button class="btn btn-danger" type="button" onclick="resuppriv()">Cancel</button>
             </div>
           </form>
       </div>
     </div>
   </div>
 </div>
 
 <input type="text" id="prvctoid" name="pccid" value="${sessionScope.pcid}">
 <c:if test="${sessionScope.pcid ne null }">
	<c:remove var="pcid" scope="session"/> 	
 </c:if>
 <script src="<c:url value='assets/admin/js/pg_js/acm/pccompofcomp.js' />"></script>
  	      