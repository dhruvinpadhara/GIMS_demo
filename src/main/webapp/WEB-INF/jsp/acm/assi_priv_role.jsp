<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 <section class="section">
          <div class="section-body">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                <div class="card">
                <div class="card-header">
                	<h5>Assign Privilege To Role</h5>
                </div>	
                  <form id="assi_to_role" autocomplete="off" >
                    <div class="card-body">
                      <div class="form-group">
	                      <label>Select Role</label>
	                      <br>
	                      <select class="form-control select2" name="role" id="role_id" onchange="check(this.value)">
	                      		
	                      </select>
	                 </div>
<!--                       <div class="form-group">
                      		<input class="ml-4" type="checkbox" onclick="sell()" id="all_checked">
                      		<span class="ml-4">All Select</span>
                      </div> -->
	                     <div class="row"> 
	                      <div class="form-group col-md-3">
	                        	<label>Select Privilege</label> <br/>
	                     	
	                      		<ul id="wkslist" style="list-style-type: none;text-transform: uppercase;padding:0" ></ul>
	                      </div>
	                      
	                      <div class="form-group col-md-3 float-left">
	                        	<label id="prvccomp"></label> <br/>
	                     	
	                      		<ul id="sub_comp" style="list-style-type: none;text-transform: uppercase;padding:0" ></ul>
	                      </div>
	                      <div class="form-group col-md-6 float-left">
	                        <div>
	                        	<label id="acscomp"></label>
	                     	
	                      		<div id="acs_box" class="row" style="list-style-type: none;text-transform: uppercase;padding:0" ></div>
	                      	
	                      		</div>
                    		</div>
                    	</div>
                    </div>
                    <div class="card-footer">
                      <button onclick="save()" class="btn btn-primary"  type="button">Submit</button>
                      <button type="reset" class="btn btn-primary">Reset</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
 <script src="<c:url value='assets/admin/js/pg_js/acm/assi_priv_role.js'/>"></script>