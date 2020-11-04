<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<p>
            <button type="button" class="btn btn-success btn-labeled btn-labeled-left btn-sm" onclick="show()"><b><i class="icon-plus2"></i></b> Add Privilege Component</button>
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
	                    <th>privilege name</th>
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
         <h5 class="modal-title" id="formModal">Privilege</h5>
         <button class="close" onclick="res()" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <form id="privilege_component_form" autocomplete="off">
         	<input type="hidden" id="privilege_component_id" name="id" value=0>
         	<div class="form-group">
                 <label>Select Privilege</label>
                 <br>
                 <select class="form-control" name="privilege" onchange="show_priv_comp(this.value)" id="privilege_id" style="width:100% !important">
                 		
                 </select>
	        </div>
	        <ul id="old_comp"></ul>
            <table class="table" id="abcd">
				<thead>
					<tr>
						<th class="col-md-5">privilege component name</th>
						<th class="col-md-5">privilege component link</th>
						<th class="col-md-2">Action</th>
					</tr>
				</thead>
				<tbody id="add">
					
				</tbody>
				<tfoot>
					<tr>
						<td><button class="btn btn-primary" type="button" onclick="addprvi()" >Addrow</button><br/>
						<span id="ad_row"></span>	</td>
						<td><button class="btn btn-success" type="button" onclick="save()">Add Component</button></td>
						<td><button class="btn btn-dark" type="button" onclick="res()">close</button></td>
					</tr>
				
			
               
            </tfoot>
             </table>   
           </form>
       </div>
     </div>
   </div>
 </div>
 <input type="hidden" id="pccid" name="pccid">
 <script src="<c:url value='assets/admin/js/pg_js/acm/privilege_component.js' />"></script>
  	      