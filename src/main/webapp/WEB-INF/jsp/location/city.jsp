<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
         <div class="card">
           <div class="card-header">
             <h4>City table</h4>
           </div>
           <div class="card-body">
             <div class="table-responsive">
               <table class="table" id="sample">
                 <thead>
                   <tr>
                     <th>No</th>
                     <th>City name</th>
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
<div style="position: fixed;bottom: 20px;right:15px;z-index: 1"><button type="button" class="btn btn-danger" onclick="show()">+</button></div>
 
 
 <div class="modal fade" id="add_form" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="formModal">City</h5>
                <button type="button" class="close" onclick="res()" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
				<form id="city_form" method="post" autocomplete="off"> 
					<input type="hidden" name="id" id="city_id" value=0>
	               <div class="form-group">
	                      <label>Select State</label>
	                      <br>
	                      <select class="form-control" name="state" id="state_id" style="width:100% !important">
	                      		
	                      </select>
	                </div>
	               <div class="form-group">
	                 <label>Enter City Name</label>
	                 <input type="text" class="form-control" placeholder="enter city name" name="cname" id="city_name">
	               </div>

	            <div class="">
	               <button class="btn btn-success float-right" type="button" onclick="return save()">Submit</button>
	               <button class="btn btn-danger" type="button" onclick="res()">Cancel</button>
             	</div>
	           	</form>                
              </div>
            </div>
          </div>
        </div>
 <!--End form-->
   <script src="<c:url value='assets/admin/js/pg_js/location/city.js'/>"></script>