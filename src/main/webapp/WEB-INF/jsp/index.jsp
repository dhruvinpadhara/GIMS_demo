<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<!DOCTYPE html>
	<html lang="en">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="pragma" content="no-cache" />
	<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
	<meta http-equiv="Expires" content="0" />
	<head>
		<title><tiles:insertAttribute name="title" /></title>

		<!-- Global styleSheets -->
		<link href="assets/admin/css/iconmoon/styles.css" rel="stylesheet" type="text/css">
		<link href="assets/admin/css/bootstrap.min.css" rel="stylesheet" type="text/css">
		<link href="assets/admin/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
		<link href="assets/admin/css/layout.min.css" rel="stylesheet" type="text/css">
		<link href="assets/admin/css/components.min.css" rel="stylesheet" type="text/css">

		<!-- global styleSheets -->

		<link href="assets/admin/css/fontawesome/styles.min.css" rel="stylesheet" type="text/css">


		<!-- Core JS files -->
		<script src="assets/admin/js/jquery.min.js"></script>
 		<script src="assets/admin/js/bootstrap.bundle.min.js"></script> 
		<script src="assets/admin/js/blockui.min.js"></script>
		<!-- Core JS files -->
		
		<!-- toaster -->
		<script src="assets/admin/js/izitoast/js/iziToast.min.js"></script>
		<link href="assets/admin/js/izitoast/css/iziToast.min.css" rel="stylesheet" type="text/css">
		<!-- sweet alert -->
		 <script src="<c:url value='assets/admin/js/sweet_alert.min.js' />"></script>
 		 <script src="<c:url value='assets/admin/js/sweetalert.js' />"></script>
		
		<!-- data table js -->
		<script src="assets/admin/js/datatables.min.js"></script>
		<script src="assets/admin/js/buttons.min.js"></script>
		<script src="assets/admin/js/datatables_extension_buttons_init.js"></script>
		
		<script src="assets/admin/js/pg_js/index.js"></script>
		
		<link rel='shortcut icon' type='image/x-icon' href=''/>
		<script src="assets/admin/js/app.js"></script>
		<!-- /theme JS files -->
		<style>
			.inner{
				display: block;
			}
		</style>
	</head>

	<body>

		<!-- Main navbar -->
		<div class="navbar navbar-expand-md navbar-dark">
			<div class="navbar-brand">
			</div>

			<div class="d-md-none">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
					<i class="icon-tree5"></i>
				</button>
				<button class="navbar-toggler sidebar-mobile-main-toggle" type="button">
					<i class="icon-paragraph-justify3"></i>
				</button>
			</div>

			<div class="collapse navbar-collapse" id="navbar-mobile">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a href="#" class="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
							<i class="icon-paragraph-justify3"></i>
						</a>
					</li>
				</ul>
				<span class="ml-md-3 mr-md-auto"> </span>
				<ul class="navbar-nav">
					
				

					 <li class="nav-item dropdown dropdown-user">
						<a href="#" class="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
							 <img src="<c:url value='assets/admin/image/employee/${sessionScope.uimage }' />" class="rounded-circle mr-2" width="34" height="34" alt="image"> 
							<span class="text-uppercase">${sessionScope.useremail }</span>
						</a>

						<div class="dropdown-menu dropdown-menu-right">
							<a href="#" class="dropdown-item"><i class="icon-user-plus"></i> My profile</a>
							<a href="#" class="dropdown-item"><i class="icon-coins"></i> My balance</a>
							<a href="#" class="dropdown-item"><i class="icon-comment-discussion"></i> Messages <span class="badge badge-pill bg-blue ml-auto">58</span></a>
							<div class="dropdown-divider"></div>
							<a href="#" class="dropdown-item"><i class="icon-cog5"></i> Account settings</a>
							<a href="<c:url value='/logout' />" class="dropdown-item"><i class="icon-switch2"></i> Logout</a>
						</div>
					</li> 
				</ul>
			</div>
		</div>
		<!-- /main navbar -->


		<!-- Page content -->
		<div class="page-content">

			<!-- Main sidebar -->
			<div class="sidebar sidebar-dark sidebar-main sidebar-expand-md">

				<!-- Sidebar mobile toggler -->
				<div class="sidebar-mobile-toggler text-center">
					<a href="#" class="sidebar-mobile-main-toggle">
						<i class="icon-arrow-left8"></i>
					</a>
					Navigation
					<a href="#" class="sidebar-mobile-expand">
						<i class="icon-screen-full"></i>
						<i class="icon-screen-normal"></i>
					</a>
				</div>
				<!-- /sidebar mobile toggler -->


				<!-- Sidebar content -->
				<div class="sidebar-content">

					<!-- User menu -->
					<div class="sidebar-user">
						<div class="card-body">
							<div class="media">
								<div class="mr-3">
									
									<a href="#"><img src="<c:url value='assets/admin/image/employee/${sessionScope.uimage }' />" width="38" height="38" class="rounded-circle" alt=""></a>
								</div>

								<div class="media-body">
									<div class=" text-uppercase">${sessionScope.useremail }</div>
									<div class="font-size-xs opacity-50"><%-- ${sessionScope.uimage },${sessionScope.userid },${sessionScope.role }, --%>
										<i class="icon-pin font-size-sm"></i>
									</div>
									
								</div>

							</div>
						</div>
					</div>
					<!-- /user menu -->


					<!-- Main navigation -->
					<div class="card card-sidebar-mobile">
						<ul class="nav nav-sidebar" data-nav-type="accordion">

							<!-- Main -->
							
							
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="fa fa-list"></i> <span>ACM</span></a>

								<ul class="nav nav-group-sub" data-submenu-title="Layouts">
									<li class="nav-item"><a class="nav-link" href="role.db">Role</a></li>
					                <li class="nav-item"><a class="nav-link" href="privilege.db">Privilege</a></li>
					                <li class="nav-item"><a class="nav-link" href="pcomponent.db">Privilege component</a></li>
					                <li class="nav-item"><a class="nav-link" href="assi_priv_role.db">Assign privilege to Role</a></li>
					                <li class="nav-item"><a class="nav-link" href="assi_priv_user.db">Assign privilege to User</a></li>
					                <li class="nav-item"><a class="nav-link" href="employee.db">Employee</a></li>
					                <li class="nav-item"><a class="nav-link" href="company.db">Company</a></li>
								</ul>
							</li>
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="icon-copy"></i> <span>Location</span></a>

								<ul class="nav nav-group-sub" data-submenu-title="Layouts">
									<li class="nav-item"><a class="nav-link" href="state.db">State</a></li>
					                <li class="nav-item"><a class="nav-link" href="city.db">City</a></li>
					                <li class="nav-item"><a class="nav-link" href="area.db">Area</a></li>
					                <li class="nav-item"><a class="nav-link" href="log.db">Log</a></li>
					                
								</ul>
							</li>
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="fa fa-list"></i> <span>Accounts</span></a>

								<ul class="nav nav-group-sub" data-submenu-title="Layouts">
					                <li class="nav-item"><a class="nav-link" href="account_type.db">Accounts types</a></li>
									<li class="nav-item"><a class="nav-link" href="group.db">Groups Types</a></li>
					                <li class="nav-item"><a class="nav-link" href="accounts.db">Accounts</a></li>
									<li class="nav-item"><a class="nav-link" href="expense.db">Exp A/C</a></li>
									

					                <!-- <li class="nav-item"><a class="nav-link" href="log.db">Log</a></li> -->
					                
								</ul>
							</li>
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="fa fa-list"></i> <span>Materials</span></a>

								<ul class="nav nav-group-sub" data-submenu-title="Layouts">
									<li class="nav-item"><a class="nav-link" href="fabric.db">Fabric</a></li>
									<li class="nav-item"><a class="nav-link" href="raw_material.db">Raw material</a></li>
									<li class="nav-item"><a class="nav-link" href="finish_material.db">Finish material</a></li>
					                <li class="nav-item"><a class="nav-link" href="item_group.db">Item Group</a></li>
									<li class="nav-item"><a class="nav-link" href="material.db">Material</a></li>
									<li class="nav-item"><a class="nav-link" href="material_details.db">Material Details(baki)</a></li>
									<li class="nav-item"><a class="nav-link" href="type_work.db">Type of Work</a></li>
									
									<li class="nav-item"><a class="nav-link" href="unit.db">Unit</a></li>
					                <!-- <li class="nav-item"><a class="nav-link" href="log.db">Log</a></li> -->
					                
								</ul>
							</li>
							<li class="nav-item nav-item-submenu">
								<a href="#" class="nav-link"><i class="fa fa-list"></i> <span>Order</span></a>

								<ul class="nav nav-group-sub" data-submenu-title="Layouts">
					                
			
									<li class="nav-item"><a class="nav-link" href="order_estimate.db">Order Estimate</a></li>
									<li class="nav-item"><a class="nav-link" href="retail_bill.db">Retail Bill</a></li>
									<li class="nav-item"><a class="nav-link" href="tax_bill.db">Tax Bill</a></li>
									<li class="nav-item"><a class="nav-link" href="purchase_bill.db">Purchase Bill</a></li>

					                <!-- <li class="nav-item"><a class="nav-link" href="log.db">Log</a></li> -->
					                
								</ul>
							</li>
							
							
							<!-- /page kits -->

						</ul>
					</div>
					<!-- /main navigation -->

				</div>
				<!-- /sidebar content -->
				
			</div>
			<!-- /main sidebar -->


			<!-- Main content -->
			<div class="content-wrapper">

				<!-- Page header -->
				<div class="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
					<div class="d-flex">
						<div class="breadcrumb">
							<a href="index.html" class="breadcrumb-item"><i class="icon-home2 mr-2"></i> Home</a>
							<a href="components_collapsible.html" class="breadcrumb-item">Components</a>
							<span class="breadcrumb-item active">Collapsible</span>
						</div>
						
						<a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
					</div>
				</div>
				<!-- /page header -->


				<!-- content area -->
				
				<input type="hidden" id="emp_id" value="${sessionScope.empid}">
				<input type="hidden" id="access" value="${sessionScope.access}">
				<%-- <input type="hidden" id="user_id" value=${sessionScope.userid }> --%>
					<div class="content">
						<tiles:insertAttribute name="content" />
					</div>
				<!-- content area -->
				
				<!-- Footer -->
				<div class="navbar navbar-expand-lg navbar-light">
					<div class="text-center d-lg-none w-100">
						<button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-footer">
							<i class="icon-unfold mr-2"></i>
							Footer
						</button>
					</div>

					<div class="navbar-collapse collapse" id="navbar-footer">
						<span class="navbar-text">
							 &copy; 2015 - 2018. <a href="#">Dhruvin padhara</a>
						</span>
					</div>
				</div>
				<!-- /footer -->

			</div>
			<!-- /main content -->

		</div>
		<!-- /page content -->

	</body>

	
	</html>
