<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

         <div class="card">
           <div class="card-header">
             <h4>Area table</h4>
           </div>
           <div class="card-body">
             <div class="table-responsive">
               <table class="table table-striped table-hover" id="sample" style="width:100%;">
                 <thead>
                   <tr>
                     <th>No</th>
                     <th>Area name</th>
                     <th>Area PinCode</th>
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
<div style="position: fixed;bottom: 20px;right:15px;z-index: 1"><input type="button" id="add_button" class="btn btn-danger" onclick="show()" value="+"></div>
 <!--Insert form-->
<div class="modal fade" id="add_form" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="formModal">Area</h5>
                <button type="button" class="close" onclick="res()" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
			<form id="area_form" autocomplete="off">
				<input type="hidden" name="id" id="area_id" value=0>
				<div class="form-group">
					<label>Select State</label>
		                      <br>
		                      <select class="form-control" onchange="check(this.value)" name="state" id="state_id" style="width:100% !important">	
		                      </select>
		         </div>
		         <div class="form-group">
					<label>Select city</label>
		                      <br>
		                      <select class="form-control" name="city" id="city_id" style="width:100% !important">
		                      </select>
		         </div>
		         
	             <div class="form-group">				
                 <label>Enter Area Name</label>
                 <input type="text" name="aname"  id="area_name" class="form-control" placeholder="enter area name">
               </div>
               <div class="form-group">
                 <label>Enter Pincode</label>
                 <input type="text" name="pincode" id="pincode" class="form-control" placeholder="enter pincode">
               </div>
	             <div class="">
	               <button class="btn btn-success float-right" type="button" onclick="return save()">Submit</button>
	               <button class="btn btn-danger" type="button" onclick="res()" >Cancel</button>
             	</div>
	         </form>                
              </div>
            </div>
          </div>
        </div>

 <!-- form end -->
<script src="<c:url value='assets/admin/js/pg_js/location/area.js'/>"></script>