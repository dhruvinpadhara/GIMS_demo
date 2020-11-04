<%@taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<section class="section">
       <div class="section-body">
         <div class="row">
       <div class="col-12">
         <div class="card">
           <div class="card-header">
             <h4>Company</h4>
           </div>
           <div class="ml-3">
					<button class="btn btn-primary" type="button" onclick="show()">Add Company</button>
			</div>
           <div class="card-body">
             <div class="table-responsive">
               <table class="table table-striped table-hover" id="sample" style="width:100%;">
                 <thead>
                   <tr>
                     <th>No</th>
                     <th>Company name</th>
                     <th>Type</th>
                     <th>Owner</th>
                     <th>Email</th>
                     <th>Mobile Number</th>
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
   <div class="modal-dialog modal-full" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="formModal">Company</h5>
         <button data-dismiss="modal" class="close" onclick="res()" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
       <form id="wizard_with_validation" autocomplete="off" >
            	<input type="hidden" id="comp_id" name="id" value=0>
               <h3>Company Details</h3>
               <fieldset>
               	<div class="row">
	                  <div class="form-group col-md-3">
	                        <label>Company name</label>
	                        <input type="text" id="comp_name" class="form-control" name="comp_name" placeholder="enter company name">
	                  </div>
	                  <div class="form-group col-md-3 float-left">
                        <label>Select type</label>
                        	<select class="form-control" name="tax" id="tax_type">
                        		<option value="">select type</option>
                        		<option value="tax">Tax</option>
                        		<option value="withouttax">Without-Tax</option>
                        	</select>
	                  </div>
	                  <div class="form-group col-md-3 float-left">
	                        <label>Owner Name</label>
	                        <input type="text" name="owner_name" id="oname" class="form-control" placeholder="enter owner name">
	                  </div>
	                  <div class="form-group col-md-3 float-left">
	                        <label>Email address</label>
	                        <input type="text" name="email" id="email" class="form-control" placeholder="enter email address">
	                  </div>
	              </div>
	              <div class="row">
	                  <div class="form-group col-md-3">
	                        <label>Mobile Number</label>
	                        <input type="text" class="form-control" id="mnumber1" maxlength="10" name="mnumber1" placeholder="enter Mobile Number">
	                  </div>
	                  <div class="form-group col-md-3 float-left">
	                        <label>Mobile Number</label>
	                        <input type="text" class="form-control" id="mnumber2" name="mnumber2" placeholder="enter Mobile Number">
	                  </div>
	                  <div class="form-group col-md-3 float-left">
	                        <label>Website Name</label>
	                        <input type="text" class="form-control" id="web_name" name="webname" placeholder="enter website name">
	                 </div>
	              	 <div class="form-group col-md-3 float-left">
	              		<label>Logo</label><a onclick="remo()"> remove image &times;</a>
	              		<input type="file" name="file" id="logo" onchange="document.getElementById('view').src = window.URL.createObjectURL(this.files[0])">
	              		<img id="view" alt="your image" width="100" height="100" />
	              		<span id="limage"></span>
	              	 </div>
	              </div>
	              <div class="row">
	                  <div class="form-group col-md-3">
							<label>State:</label><span onclick="st()" style="color: dodgerblue"><i class="fa fa-plus">Add State</i></span>
		                      <br>
		                      <select class="form-control state" onchange="check(this.value)" id="state_id" name="state" style="width:100% !important">	
		                      </select>
		         	  </div>
		         	  <div class="form-group col-md-3 float-left">
							<label>City:</label><span onclick="ct()" style="color: dodgerblue"><i class="fa fa-plus">Add City</i></span>
		                      <br>
		                      <select class="form-control city" onchange="check1(this.value)" name="city" id="city_id" style="width:100% !important">
		                      </select>
		         	  </div>
	                  <div class="form-group col-md-3 float-left">
							<label>Area:</label><span onclick="ar()" style="color: dodgerblue"><i class="fa fa-plus">Add Area</i></span>
		                      <br>
		                      <select class="form-control" name="area" id="area_id" style="width:100% !important">
		                      </select>
		         	  </div>
	                  
	                  <div class="form-group col-md-3 float-left">
	                        <label>Zip Code</label>
	                        <input type="text" name="zipcode" id="zipcode" class="form-control" placeholder="enter Zip code">
	                  </div>
	              </div>
	              <div class="row">
	                  <div class="form-group col-md-6">
							<label>Address</label>
		                      <br>
		                      <textarea class="form-control" placeholder="enter address" name="address" id="address" style="width:100% !important">	
		                      </textarea>
		         	  </div>
		         	  <div class="form-group col-md-3 float-left">
							<label>GST Number</label>
		                      <br>
		                       <input type="text" class="form-control" id="gst" name="gst_number" placeholder="enter GST Number">
		         	  </div>
	                  <div class="form-group col-md-3 float-left">
							<label>PAN CARD Number</label>
		                      <br>
 							<input type="text" class="form-control" id="pan" name="pan_number" placeholder="10 digit PAN CARD Number">
		         	  </div>
	              </div>
               </fieldset>
               <h3>Bank details</h3>
               <fieldset>
                  	<table class="table">
                  		<thead>
                  			<tr>
	                  			<th>select</th>
	                  			<th>Bank Name</th>
	                  			<th>Account No</th>
	                  			<th>Branch</th>
	                  			<th>IFSC Code</th>
                  			</tr>
                  		</thead>
                  		<tr>
                  			<td><input type="checkbox" name="record"></td>
                  			<td><input type="text" class="form-control" name="bank_name"></td>
                  			<td><input type="text" class="form-control" name="account_number"></td>
                  			<td><input type="text" class="form-control" name="branch"></td>
                  			<td><input type="text" class="form-control" name="ifsc_code"></td>
                  		</tr>
                  	</table>
               </fieldset>
            </form>
            <button class="btn btn-danger" type="button" onclick="res()">close</button>
       </div>
     </div>
   </div>
 </div>
 
 <div class="modal fade" id="st_form" tabindex="-1" role="dialog" aria-labelledby="formModal"
   aria-hidden="true">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="formModal">State</h5>
         <button data-dismiss="modal" class="close" onclick="resst()" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         <form id="state_form" autocomplete="off" method="post">
         	<input type="hidden" name="sid" value=0>
               <div class="form-group">
	               <label>Enter State Name</label>
	               <input type="text" class="form-control" name="sname" id="state_name" placeholder="enter state name">
               </div>
            <div class="">
               <input class="btn btn-success float-right" type="button" onclick="savest()" value="ADD" />
               <button class="btn btn-danger" type="button" onclick="resst()">Cancel</button>
             </div>
           </form>
       </div>
     </div>
   </div>
 </div>
  	<div class="modal fade" id="ct_form" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="formModal">City</h5>
                <button type="button" class="close" onclick="resct()" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
				<form id="city_form" method="post" autocomplete="off"> 
					<input type="hidden" name="id" value=0>
	               <div class="form-group">
	                      <label>Select State</label>
	                      <br>
	                      <select class="form-control state" id="state_id2" name="state" style="width:100% !important">
	                      		
	                      </select>
	                </div>
	               <div class="form-group">
	                 <label>Enter City Name</label>
	                 <input type="text" class="form-control" placeholder="enter city name" name="cname" id="city_name">
	               </div>

	            <div class="">
	               <button class="btn btn-success float-right" type="button" onclick="savect()">Submit</button>
	               <button class="btn btn-danger" type="button" onclick="resct()">Cancel</button>
             	</div>
	           	</form>                
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="ar_form" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="formModal">Area</h5>
                <button type="button" class="close" onclick="resar()" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
			<form id="area_form" autocomplete="off">
				<input type="hidden" name="id" value=0>
				<table>
					<thead></thead>
				</table>
				<div class="form-group">
					<label>Select State</label>
		                      <br>
		                      <select class="form-control state" onchange="check(this.value)" name="state" id="state_id1" style="width:100% !important">	
		                      </select>
		         </div>
		         <div class="form-group">
					<label>Select city</label>
		                      <br>
		                      <select class="form-control city" name="city" id="city_id1" style="width:100% !important">
		                      	
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
	               <button class="btn btn-success float-right" type="button" onclick="return savear()">Submit</button>
	               <button class="btn btn-danger" type="button" onclick="resar()">Cancel</button>
             	</div>
	         </form>                
              </div>
            </div>
          </div>
        </div>
  <script src="<c:url value='assets/admin/js/pg_js/acm/company.js' />"></script>
  <script src="<c:url value='assets/admin/js/page/form-wizard1.js' />"></script>