<%@taglib uri="http://java.sun.com/jstl/core" prefix="c" %>

      <!-- Content area -->
         <p>
            <button id="add" data-toggle="modal" data-target="#add_form" type="button" class="btn btn-success btn-labeled btn-labeled-left btn-sm"><b><i class="icon-plus2"></i></b> Add Item Group</button>
         </p>
         <!-- Basic initialization -->
         <div class="card">
            <div class="card-header header-elements-inline">
               <h5 class="card-title">Item table</h5>
               <div class="header-elements">
                  <div class="list-icons">
                     <a class="list-icons-item" data-action="collapse"></a>
                     <a class="list-icons-item" data-action="reload"></a>
                     <a class="list-icons-item" data-action="remove"></a>
                  </div>
               </div>
            </div>
            <div class="card-body">
               <div class="table-responsive">
                  <table class="table" id="sample">
                     <thead>
                        <tr>
                           <th>No</th>
                           <th>Material type</th>
                           <th>Item size</th>
                           <th>Unit</th>
                           <th>price</th>
                           <th>Short name</th>
                           <th class="action">Action</th>
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
         <div class="modal fade" id="add_form" tabindex="-1" role="dialog" aria-labelledby="formModal"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                  <div class="modal-header">
                     <h5 class="modal-title" id="formModal">Item Group</h5>
                     <button class="close" data-dismiss="modal"  onclick="res()" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div class="modal-body">
                     <form id="item_form" autocomplete="off">
                        <input type="hidden" id="group_id" name="id" value=0>
                        <!-- <div class="form-group">
                           <label>Item Name</label>
                           <input type="text" class="form-control" name="item_name" id="item_name" placeholder="enter item name">
                        </div> -->
                        <div class="form-group">
                           <label>Item Size</label>
                           <input type="text" class="form-control" name="item_size" id="item_size" placeholder="22-M[m,ml,l] 22-26M[m,ml,l]">
                        </div>
                        <div class="form-group">
                              <label >Select Material </label> 
                              <select name="mid" id="mid" class="form-control role"></select>
                        </div>
                         
                           <!-- <div class="form-group col-md-6">
                              <label>Par Bundle*</label>
                              <input type="number" class="form-control" id="bundle" name="bundle" placeholder="enter bundle">
                           </div> -->
                           <div class="form-group">
                              <label>Unit</label>
                              <select class="form-control" id="unit_id" name="unit"></select>
                           </div>
                           <div class="form-group">
                           		<label>Items</label>
                           		<input type="text" class="form-control" name="items" id="items" placeholder="enter Number of items" />
                           </div>
                           <div class="form-group">
                              <label>Short Name*</label>
                              <input type="text" class="form-control" name="short_name" id="shortName" placeholder="enter short name (in 2 character) ">
                           </div>
                        <div class="">
                           <input class="btn btn-success float-right" type="button" onclick="return save()" value="ADD" />
                           <button class="btn btn-danger" data-dismiss="modal" type="button" onclick="res()">Cancel</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <!-- /basic modal -->

<!-- /page content -->
<script src="<c:url value='assets/admin/js/pg_js/material/item_group.js' />"></script>