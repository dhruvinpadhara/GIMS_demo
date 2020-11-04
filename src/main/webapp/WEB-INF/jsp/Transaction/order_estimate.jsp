<%@taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js"></script>

<script src="assets/admin/js/dragdrop/dragula.min.js"></script>
<script src="assets/admin/js/dragdrop/uniform.min.js"></script>
<script src="assets/admin/js/extension_dnd.js"></script>
 <style>
	
  .table-responsive td {
		margin : 2px;
	}
	
</style> 
<!-- Page content -->

       <!--   <p>
            <button onclick="show()" data-toggle="modal" data-target="#add_form" type="button" class="btn btn-success btn-labeled btn-labeled-left btn-sm"><b><i class="icon-plus2"></i></b> Add Order Estimate</button>
         </p> -->
         <!-- Basic initialization -->
         <div class="card" id="hello">
            <div class="card-header header-elements-inline">
               <h5 class="card-title">orderEstimate</h5>
               
            </div>
            <div class="card-body">
                 <form id="employee_form" autocomplete="off">
                        <input type="hidden" id="comp_id" name="id" value=0>
                        <div class="row">
                           <div class="form-group col-md-3">
                              <label>Tr. Date*</label>
                              <input type="date" readonly="readonly" class="form-control" id="trDate" name="trDate" required="required" />
                           </div>
                           <div class="form-group col-md-3 float-left">
                              <label >Sr. No.*</label>
                              <input type="text" readonly="readonly"  class="form-control" name="srNumber" id="srNumber" required="required" placeholder="Enter Sr. No. " />
                           </div> 
                           <div class="form-group col-md-3 float-left">
                              <label >Select Party Name </label> 
                              <select name="partyName" id="partyName" class="form-control party"></select>
                           </div>
                            <div class="form-group col-md-3 float-left">
                              <label >Select Company </label> 
                              <select name="companyName" id="companyId" class="form-control company"></select>
                           </div> 
                           <!-- <div class="form-group col-md-6">
                           	<label>Bar Code*</label>
                              <img id="barcode" name="barcode"></img>
                              <label id="srNumber" class="center"></label>                           
                           </div> -->
                        </div>
                        <div class="row">
                           <div class="form-group col-md-3">
                           	<label >Bar Code*</label>
                              <img id="barcode" name="barcode"></img>                           
                           </div> 
                            
                        </div>
                        <div>
                           <table class="table-responsive">
					 			<thead>
						 			<tr>
						 				<th>Sr.No</th>
						 				<th>Item Name</th>
						 				<th>Item Size</th>
						 				<th>Bundle</th>
						 				<th>Qty</th>
						 				<th>Price</th>
						 				<th>Total</th>
						 				<th>Action</th>
						 			</tr>
					 			</thead>
					 		<tbody id="media-list-target-left" class="media-list-container">
					 		</tbody>
					 		<tfoot>
					 			<tr style="height: 5px">
					 				<td colspan="6">
					 					<input type="button"  class="btn btn-primary"  value="Add Items" onclick="add_row()" />
					 				</td>
					 				<td colspan="1"></td>
									<td class="col-sm-1"  colspan="1">
					 					<input type="text" class="form-control" id="subtotal" disabled="disabled" placeholder="SubTotal" name="subtotal">
					 				</td>
					 				
					 			</tr>
					 		</tfoot>
					 		</table>
					     </div>
                        <div class="row">
                         	<div class="form-group col-md-2">
                              <label >Discount %</label>
                              <input type="number" id="discount" class="form-control" name="discount" placeholder="enter discount" required="required" />
                           </div>
                           <div class="form-group col-md-2 float-left">
                              <label >Gross %</label>
                              <input type="number" id="gross" class="form-control" name="gross" placeholder="enter gross" required="required" />
                           </div>
                           <div class="form-group col-md-2 float-left">
                              <label >Discount Rs.</label>
                              <input type="number" id="discountRs" class="form-control" name="discountRs" placeholder="enter .." required="required" />
                           </div>
                            <div class="form-group col-md-2 float-left">
                              <label >Packing Rs.</label>
                              <input type="number" id="packingRs" class="form-control" name="packingRs" placeholder="enter .." required="required" />
                           </div>
                            <div class="form-group col-md-2 float-left">
                              <label >GST Rs.</label>
                              <input type="number" id="GSTRs" class="form-control" name="vatRs" placeholder="enter .." required="required" />
                           </div>
                           <div class="form-group col-md-2 float-left">
                              <label >Rs.</label>
                              <input type="number" readonly="readonly" value="00" id="Rs" class="form-control" name="Rs" placeholder="enter .." required="required" />
                           </div>
                        </div>
                         <div class="row">
                         	<div class="form-group col-md-2">
                              <label>Transport</label>
                              <input type="text" class="form-control" name="transport" placeholder="enter transporter name">
                           </div>
                           <div class="form-group col-md-2 float-left transport">
                              <label >L.R.No.</label>
                              <input type="number" id="lr" class="form-control" name="lr" placeholder="enter L.R.No." required="required" />
                           </div>
                           <div class="form-group col-md-2 float-left">
                              <label >Date</label>
                              <input type="date" id="date" class="form-control" name="date" placeholder="select date" required="required" />
                           </div>
                            <div class="form-group col-md-6 float-right">
                              <label >Remark</label>
                              <input type="text" id="remark" class="form-control" name="remark" placeholder="any remark" required="required" />
                           </div>
                           
                        </div>
                        <div class="row">
                         	<div class="form-group col-md-2">
                              <label>Courier</label>
                              <input type="text" class="form-control" name="transport" placeholder="enter transporter name">
                           </div>
                           <div class="form-group col-md-2 float-left courier">
                              <label >Doc.No.</label>
                              <input type="number" id="docNo" class="form-control" name="docNo" placeholder="enter Doc.No." required="required" />
                           </div>
                           <div class="form-group col-md-2 float-left">
                              <label >Date</label>
                              <input type="date" id="date" class="form-control" name="date" placeholder="select date" required="required" />
                           </div>
                           
                        </div>
                        <br>
                        <div class="row">
                         <div class="col-md-3">
                           	<button type="button" class="btn btn-dark btn-sm ml-3" onclick="print_estimate()"><i class="icon-printer mr-2"></i>Save And Print</button>
                         </div>
                         
                         <div class="col-md-3 float-left">
                            <button type="button" class="btn btn-primary btn-labeled btn-labeled-left"><b><i class="icon-paperplane"></i></b> Send SMS</button>
               			</div>
                       </div>
                     </form>
            </div>
         </div>
			
         <!-- /basic initialization -->
<script src="<c:url value='assets/admin/js/pg_js/transaction/order_estimate.js'/>"></script>