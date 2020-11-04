<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
		<p>
            <button id="add" data-toggle="modal" data-target="#add_form" type="button" onclick="show()" class="btn btn-success btn-labeled btn-labeled-left btn-sm"><b><i class="icon-plus2"></i></b>Add Account</button>
         </p>
            <div class="card">
            <div class="card-header">
             <h4>Accounts</h4>
           </div>
               <div class="card-body">
                  <div class="table-responsive">
                     <table class="table" id="sample">
                        <thead>
                           <tr>
                              <th>No</th>
                              <th>Party code</th>
                              <th>Party name</th>
                              <th>Phone number</th>
                              <th>GST number</th>
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
            <h5 class="modal-title" id="myLargeModalLabel">Accounts</h5>
            <button type="button" class="close" onclick="res()" aria-label="Close">
            	<span aria-hidden="true">&times;</span>
            </button>
         </div>
         <div class="modal-body">
            <form id="account_form" autocomplete="off">
            	<input type="hidden" name="id" id="account_id" value=0>
               		<div class="row">
		                  <div class="form-group col-md-3">
		                        <label>Party code*</label>
		                        <input type="text" class="form-control" id="partycode" name="pcode" placeholder="enter username">
		                  </div>
		                  <div class="form-group col-md-3 float-left">
		                        <label>Party Name*</label>
		                        <input type="text" class="form-control" name="partyname" id="partyname" placeholder="enter password">
		                  </div>
		                  <div class="form-group col-md-3 float-left">
		                        <label>Select group name</label> 
		                        <select name="gid" id="group_id" class="form-control role"></select>
		                  </div>
		                  <div class="form-group col-md-3 float-left">
		                        <label >Select Account </label> 
		                        <select name="acid" id="accounts_id" class="form-control role"></select>
                  		  </div>
	                </div>
	                <div class="row">
	                	<div class="form-group col-md-3">
	                        <label>Contact person*</label>
	                        <input type="text" name="cperson" class="form-control" id="cperson" placeholder="enter person name">
                  		</div>
                  		<div class="form-group col-md-3 float-left">
	                        <label>Phone No*</label>
	                        <input type="text" class="form-control" name="phone_number" placeholder="enter contact number">
		                </div>
                  		<div class="form-group col-md-3 float-left">
	                        <label>Mobile No*</label>
	                        <input type="text" id="mobile_number" class="form-control" name="mobile_number" placeholder="enter mobile number">
		                </div>
                  		<div class="form-group col-md-3">
	                        <label>Email*</label>
	                        <input type="text" class="form-control" name="email" id="email_id" placeholder="enter email">
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
		                <div class="form-group col-md-3 float-left">
	                        <label>Address*</label>
	                        <textarea name="address" cols="25" id="address" rows="2" placeholder="enter address" class="form-control no-resize"></textarea>
                     	</div>
	                </div>
					<div class="row">
                           <div class="form-group col-md-3">
                              <label>Discount %</label>
                              <input type="text" name="discount" class="form-control" id="discount" placeholder="enter discount percentage">
                           </div>
                          	<div class="form-group col-md-3 float-left">
                              <label>GST Number</label>
                              <input type="text" id="gstNumber" class="form-control" name="gstNumber" placeholder="enter gst number">
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label>Transporter</label>
                              <textarea name="transporter" cols="25" id="transport" rows="2" placeholder="enter address" class="form-control no-resize"></textarea>
                           </div>
                           <div class="form-group col-md-3">
                              <label>Agent</label>
                              <input type="text" class="form-control" name="agent" id="agent" placeholder="enter agent name">
                           </div>
                     </div>
                  	<div class="row">
                           <div class="form-group col-md-3">
                              <label>GST %</label>
                              <input type="number" name="vat" class="form-control" id="emp_vat" placeholder="enter vat">
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label>Type</label>
                              <input type="text" id="oftype" class="form-control" name="oftype" placeholder="enter Type">
                           </div>
                           <div class="form-group col-md-3">
                              <label>Terms(Days)</label>
                              <input type="number" class="form-control" name="tdays" id="tdays" placeholder="enter Days ...">
                           </div>
                        </div>
                  	
                  <div class="form-group">
                  		<button type="button" onclick="res()" class="btn btn-danger">close</button>
            			<button type="button" onclick="return save()" class="btn btn-success float-right">submit</button>
                  </div>
            </form>
          </div>
      </div>
   </div>
</div>

<script src="<c:url value='assets/admin/js/pg_js/account/accounts.js'/>"></script>