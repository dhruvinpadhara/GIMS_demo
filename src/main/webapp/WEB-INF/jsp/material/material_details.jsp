<%@taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<!-- Page content -->
         <p>
            <button data-toggle="modal" data-target="#add_form"  type="button" class="btn btn-success btn-labeled btn-labeled-left btn-sm"><b><i class="icon-plus2"></i></b> Add Material Details</button>
         </p>
         <!-- Basic initialization -->
         <div class="card">
            <div class="card-header header-elements-inline">
               <h5 class="card-title">Material Details</h5>
            </div>
            <div class="card-body">
               <div class="table-responsive">
                  <table class="table" id="sample">
                     <thead>
                        <tr>
                           <th>No</th>
                           <th>Item Code</th>
                           <th>Description</th>
                           <th>Purchase Date</th>
                           <th>Supplier </th>
                           <th>Send To</th>
                           <th>Image</th>
                           <th>M.R.P</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
         <!-- /basic initialization -->
         <!-- Basic modal -->
         <div class="modal fade bd-example-modal-lg"  id="add_form" tabindex="-1" role="dialog" aria-labelledby="formModal"
            aria-hidden="true">
            <div class="modal-dialog modal-full">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="myLargeModalLabel">Material Details</h5>
                     <button data-dismiss="modal" type="button" class="close" onclick="resetForm()" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div class="modal-body">
                     <form enctype="multipart/form-data" id="material_details_form" autocomplete="off">
                        <input type="hidden" name="id" value=0>
                        <div class="row">
                           <div class="form-group col-md-3">
                              <label>Item Code*</label>
                              <input type="text" class="form-control"  id="itemCode" name="item_code" placeholder="enter itemCode">
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label >Description*</label>
                              <input type="text" class="form-control"  name="description" id="desc" placeholder="enter description">
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label>Bale No*</label>
                              <input type="text" name="baleNumber"  id="baleNumber" class="form-control" placeholder="enter Bale Number">
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label>Size*</label>
                              <input type="number" name="size" class="form-control" id="size" placeholder="enter size">
                           </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-3">
                              <label >Item Group </label> 
                              <select name="itemgroup" id="itemgroup" class="form-control"></select>
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label>select Unit*</label>
                           	  <select name="unit" id="unit" class="form-control"></select>
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label >Op. Bal(Qty)*</label>
                              <input type="number" id="op_balenece" class="form-control" name="op_balence" placeholder="enter Op. Bal(Qty)">
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label>Op. Bal(RS)*</label>
                              <input type="number" name="op_bal" class="form-control" id="op_bal" placeholder="enter Op. Bal(RS)">
                           </div>
                        </div>
                         <div class="row">
                           <div class="form-group col-md-3">
                              <label>Purchase Rate Rs.</label>
                              <input type="number" id="purchaseRate"  class="form-control" name="purchaseRate" placeholder="enter Purchase Rate">
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label>Purchase Code*</label>
                              <input type="number" id="purchaseCode"  class="form-control" name="purchaseCode" placeholder="enter Purchase Code" />
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label>Last Purchase Date</label>
                              <input type="date" id="purchaseDate"  class="form-control" name="purchaseDate" placeholder="enter PurchaseDate">
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label>Sales Rate Rs.*</label>
                              <input type="number" name="salesRate"  class="form-control" id="salesRate" placeholder="enter Sales Rate">
                           </div>
                        </div>
                        <div class="row">
                           <div class="form-group col-md-3">
                              <label >M.R.P.</label>
                              <input type="number" id="mrp" class="form-control"  name="mrp" placeholder="enter M.R.P.">
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label >Discount*</label>
                              <input type="number" id="discount" class="form-control"  name="discount" placeholder="enter discount" />
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label >Item Quality</label>
                              <input type="text" id="itemQuality" class="form-control"  name="itemQuality" placeholder=" 1 = A , 2 = B ....">
                           </div>
                           
                           <div class="form-group col-md-3 float-left">
                              <label>Per Bundle*</label>
                              <input type="number" name="perBundle" class="form-control"  id="perBundle" placeholder="enter per Bundle">
                           </div>
                        </div>
                        <div class="row">
                        	<div class="form-group col-md-3">
                              <label >GST Rate(%)*</label>
                              <input type="number" id="vatRate" class="form-control"  name="gstRate" placeholder="enter GST Rate" />
                           </div>
                           <div class="col-md-3 float-left">
                           		<label>H.S.N Code*</label>
                           		<input type="text" id="hsncode" class="form-control" name="hsnCode" placeholder="enter HSN Code" />
                           </div>
                           <div class=" col-md-3 float-left">
                              <label>Select Supplier* </label> 
                              <select name="supplier" id="supplier" class="form-control"></select>
                           </div>
                           <div class="col-md-3 float-left">
                              <label>Send To*</label> 
                              <input type="text" id="sendTo" class="form-control" name="sendTo" placeholder="enter receiver name">
                              	
                           </div>
                        </div>
                        <div class="row">
                        	<div class="col-md-12 float-left">
                              <label>upload Image:</label><b><a onclick="remo()"> remove File &times;</a></b>
                              <input type="file" name="file" id="material_image" onchange="document.getElementById('view').src = window.URL.createObjectURL(this.files[0])">
		              		<img id="view" alt="your image" width="100" height="100" />
		              		<span id="uimage"></span>
                           </div>
                        </div>                  
                        <br>
                        <div class="form-group">
                           <button type="button" data-dismiss="modal" onclick="resetForm()" class="btn btn-danger">close</button>
                           <button type="button" onclick="return save()" class="btn btn-success float-right">submit</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <!-- /basic modal -->
      

<!-- /page content -->
<script src="<c:url value='assets/admin/js/pg_js/material/material_details.js' />"></script>