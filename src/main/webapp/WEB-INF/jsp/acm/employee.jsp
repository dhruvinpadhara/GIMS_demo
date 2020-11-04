<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
            <!-- <input type="date" id="testing">
            <button type="button" onclick="date_Data()">date</button> -->
            <div class="card">
            <div class="card-header">
             <h4>Employee</h4>
           </div>
           <div class="ml-3" id="add">
					<button class="btn btn-primary" type="button" onclick="show()">Add Employee</button>
			</div>
               <div class="card-body">
                  <div class="table-responsive">
                     <table class="table" id="sample" >
                        <thead>
                           <tr>
                              <th>No</th>
                              <th>EmpName</th>
                              <th>Role</th>
                              <th>UserName</th>
                              <th>Image</th>
                              <th>MobileNumber</th>
                              <th>Action</th>
                           </tr>
                        </thead>
                        <tbody>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
<!--Insert form-->
<div class="modal fade bd-example-modal-lg"  id="add_form" tabindex="-1" role="dialog" aria-labelledby="formModal"
   aria-hidden="true">
   <div class="modal-dialog modal-full">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title" id="myLargeModalLabel">Employee</h5>
            <button type="button" class="close" onclick="res()" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
         </div>
         <div class="modal-body">
            <form id="employee_form" autocomplete="off">
            	<input type="hidden" name="id" value=0>
               		<div class="row">
		                  <div class="form-group col-md-3">
		                        <label>Username*</label>
		                        <input type="text" class="form-control" id="username" name="username" placeholder="enter username">
		                  </div>
		                  <div class="form-group col-md-3 float-left">
		                        <label >Password*</label>
		                        <input type="text" class="form-control" name="password" id="password" placeholder="enter password">
		                  </div>
		                  <div class="form-group col-md-3 float-left">
		                        <label >Confirm Password*</label>
		                        <input type="text" class="form-control" id="confirm" placeholder="enter confirm password">
		                  </div>
		                  <div class="form-group col-md-3 float-left">
		                        <label>Name*</label>
		                        <input type="text" name="name" id="empname" class="form-control" placeholder="enter Employee name">
                  		  </div>
	                </div>
	                <div class="row">
	                	<div class="form-group col-md-3">
	                        <label>Email*</label>
	                        <input type="email" name="email" class="form-control" id="emp_email" placeholder="enter email">
                  		</div>
                  		<div class="form-group col-md-3">
	                        <label >Date*</label>
	                        <input type="date" class="form-control" id="udate" name="date">
	                    </div>
                  		<div class="form-group col-md-3 float-left">
	                        <label>gender*</label><br/>
	                        <input type="radio" name="gender" value="male">&nbsp;Male*&nbsp;&nbsp;
	                        <input type="radio" name="gender" value="female">&nbsp;Female* 
	                        <br/>
	                        <span id="gender"></span>
                     	</div>
                     	
	                    <div class="form-group col-md-3 float-left">
	                        <label >Mobile No*</label>
	                        <input type="number" id="mobile_number" class="form-control" name="mobile" placeholder="enter mobile number">
		                </div>
	                </div>
	                <div class="row">
	                	<div class="form-group col-md-3 float-left">
		                        <label >Select Role </label> 
		                        <select name="rid" id="role_id" class="form-control role"></select>
		                </div>
		                <div class="form-group col-md-3 float-left">
	                        <label >File*</label><a onclick="remo()"> remove File &times;</a>
	                        <input type="file" name="file" id="user_image" onchange="document.getElementById('view').src = window.URL.createObjectURL(this.files[0])">
		              		<img id="view" alt="your image" width="100" height="100" />
		              		<span id="uimage"></span>
		                </div>
		                <div class="form-group col-md-6 float-left">
	                        <label>Address*</label>
	                        <textarea name="address" cols="25" id="address" rows="3" placeholder="enter address" class="form-control no-resize"></textarea>
                     	</div>
	                </div>
	                <div class="row">
	                     <div class=" col-md-3">
	                        <label>Select State </label> 
	                        <select name="sid" id="state_id" onchange="city(this.value)" class="form-control country"></select>
	                     </div>
	                     <div class="col-md-3 float-left">
	                        <label>Select City </label> 
	                        <select name="cid" id="city_id" onchange="area(this.value)" class="form-control state"></select>
	                     </div>
	                     <div class="col-md-3 float-left">
	                        <label>Select Area</label> 
	                        <select name="aid" id="area_id" class="form-control city"></select>
	                     </div>
                  	</div>
                  	<br>
                  <div class="form-group">
                  		<button type="button" onclick="res()" class="btn btn-danger">close</button>
            			<button type="button" onclick="return save()" class="btn btn-success float-right">submit</button>
                  </div>
            </form>
            
          </div>
      </div>
   </div>
</div>

<script src="<c:url value='assets/admin/js/pg_js/acm/employee.js'/>"></script>