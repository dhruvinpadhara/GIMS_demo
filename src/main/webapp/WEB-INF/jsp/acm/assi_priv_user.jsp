<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<section class="section">
   <div class="section-body">
      <div class="row">
         <div class="col-12 col-md-12 col-lg-12">
            <div class="card">
               <form id="assi_priv_user" autocomplete="off" >
                  <div class="card-body">
                     <div class="row">
                        <div class="col-sm-6">
                           <div class="form-group">
                              <label>Select Role </label> 
                              <select name="role" id="role_id" onchange="emp(this.value)"  class="form-control dropDown">
                              </select>
                           </div>
                        </div>
                        <div class="col-sm-6">
                           <div class="form-group">
                              <label>Select User </label> 
                              <select name="empid" id="empl_id" class="form-control dropDown">
                              </select>
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                  		<input type="checkbox" onclick="sell()" id="all_checked"/>
                  			<span class="ml-4">All Select</span>
                  	</div>
                  	<div class="row">
	                     <div class="form-group col-md-3">
	                        <label>Select Privilege</label> <br/>
	                        <ul id="prvlist" style="list-style-type: none;text-transform: uppercase;padding:0" ></ul>
	                     </div>
	                     <div class="form-group col-md-3 float-left">
	                        	<label id="prvccomp">Privilege component</label> <br/>
	                     	
	                      		<ul id="sub_comp" style="list-style-type: none;text-transform: uppercase;padding:0" ></ul>
	                      </div>
	                     <div class="form-group col-md-6 float-left">
	                     	<label id="#">Access</label>
	                     	<ul id="acs_box" style="list-style-type: none;" class="text-uppercase"></ul>
	                     </div>
	                  </div>
                  </div>
                  
                  <div class="card-footer">
                     <button type="button" onclick="save()" class="btn btn-primary">submit</button>
                     <button type="button" onclick="res()" class="btn btn-secondary">Reset</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</section>
<script src="<c:url value='assets/admin/js/pg_js/acm/assi_priv_user.js'/>"></script>