<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/security/tags" prefix="security" %>

<security:authorize access="isAuthenticated()">
	<security:authentication property="principal.username" var="u"/>
</security:authorize>

<c:if test="${u ne null }">
	<c:redirect url="index.db" />
</c:if> 
<!DOCTYPE html>
<html lang="en">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title></title>

	<!-- Global stylesheets -->
	<link href="assets/admin/css/iconmoon/styles.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/layout.min.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/components.min.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/colors.min.css" rel="stylesheet" type="text/css">
	<!-- /global stylesheets -->

	<!-- Core JS files -->
	<script src="assets/admin/js/main/jquery.min.js"></script>
	<script src="assets/admin/js/main/bootstrap.bundle.min.js"></script>
	<script src="assets/admin/js/plugins/loaders/blockui.min.js"></script>
	<!-- /core JS files -->

	<!-- Theme JS files -->
	<script src="assets/js/app.js"></script>
	<!-- /theme JS files -->

</head>

<body>

		

	<!-- Page content -->
	<div class="page-content">

		<!-- Main content -->
		<div class="content-wrapper">

			<!-- Content area -->
			<div class="content d-flex justify-content-center align-items-center">

				<!-- Login form -->
				<form method="post" class="login-form" autocomplete="off" action="<c:url value='/login' />">
					<div class="card mb-0">
						<div class="card-body">
							<div class="text-center mb-3">
								<i class="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
								<h3>DBPADHARA</h3>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-left">
								<input type="text" name="username" class="form-control" placeholder="Username">
								<div class="form-control-feedback">
									<i class="icon-user text-muted"></i>
								</div>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-left">
								<input type="password" name="password" class="form-control" placeholder="Password">
								<div class="form-control-feedback">
									<i class="icon-lock2 text-muted"></i>
								</div>
							</div>

							<div class="form-group">
								<button type="submit" class="btn btn-primary btn-block">Sign in <i class="icon-circle-right2 ml-2"></i></button>
							</div>

							<div class="text-center">
								<a href="forget_pass.db">Forgot password?</a>
							</div>
						</div>
					</div>
				</form>
				<!-- /login form -->

			</div>
			<!-- /content area -->


			<!-- Footer -->
			<div class="navbar navbar-expand-lg navbar-light">
				<div class="text-center d-lg-none w-100">
					<button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-footer">
						<i class="icon-unfold mr-2"></i>
						Footer
					</button>
				</div>

			</div>
		</div>
		<!-- /main content -->

	</div>
	<!-- /page content -->

</body>

</html>
