<%@taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<!-- Page content -->
<p>
            <button id="add" data-toggle="modal" data-target="#add_form" type="button" class="btn btn-success btn-labeled btn-labeled-left btn-sm"><b><i class="icon-plus2"></i></b> Add Material</button>
         </p>
<div class="page-content">
   <!-- Main content -->
   <div class="content-wrapper">
      
      <!-- Content area -->
      <div class="content">
         <!-- Basic initialization -->
         <div class="card">
            <div class="card-header header-elements-inline">
               <h5 class="card-title">Material</h5>
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
                           <th>Material Name</th>
                           <th>Material Description</th>
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
                     <h5 class="modal-title" id="formModal">Material</h5>
                     <button class="close" data-dismiss="modal"  onclick="res()" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div class="modal-body">
                     <form id="material_form" autocomplete="off">
                        <input type="hidden" id="group_id" name="id" value=0>
                        <div class="form-group">
                              <label>Material Name*</label>
                              <input type="text" class="form-control" name="materialName" id="materialName" placeholder="enter material name">
                           </div>
                        <div class="form-group">
                           <label>Material Description</label>
                           <input type="text" class="form-control" name="materialDesc" id="materialDesc" placeholder="enter material Description">
                        </div>
                        <div>
                           <input class="btn btn-success float-right" type="button" onclick="return save()" value="ADD" />
                           <button class="btn btn-danger" data-dismiss="modal" type="button" onclick="res()">Cancel</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <!-- /basic modal -->
      </div>
      <!-- /content area -->
   </div>
   <!-- /main content -->
</div>
<!-- /page content -->
<script src="<c:url value='assets/admin/js/pg_js/material/material.js' />"></script>