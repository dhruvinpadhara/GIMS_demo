<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Forget password</title>

	<!-- Global stylesheets -->
	<link href="assets/admin/css/iconmoon/styles.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/layout.min.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/components.min.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/colors.min.css" rel="stylesheet" type="text/css">
	<!-- /global stylesheets -->

		<!-- Core JS files -->
	<script src="assets/admin/js/jquery.min.js"></script>
	<script src="assets/admin/js/bootstrap.bundle.min.js"></script>
	<script src="assets/admin/js/blockui.min.js"></script>
	<!-- /core JS files -->

	<!-- Theme JS files -->
	<script src="assets/js/app.js"></script>
	<!-- /theme JS files -->

</head>
<body>
<div class="page-content">

		<!-- Main content -->
		<div class="content-wrapper">

			<!-- Content area -->
			<div class="content d-flex justify-content-center align-items-center">

				<!-- Password recovery form -->
				<form autocomplete="off" method="post">
					<div class="card mb-0">
						<div class="card-body">
							<div class="text-center mb-3">
								<i class="icon-spinner11 icon-2x text-warning border-warning border-3 rounded-round p-3 mb-3 mt-1"></i>
								<h5 class="mb-0">Password recovery</h5>
								<span class="d-block text-muted">We'll send you instructions in mobile number or email</span>
							</div>

							<div class="form-group form-group-feedback form-group-feedback-right">
								<input type="text" class="form-control" id="mobile" name="mobile_number" placeholder="Your email">
								<div class="form-control-feedback">
									<i class="icon-mail5 text-muted"></i>
								</div>
							</div>
							<span id="data"></span>
							<br/>
							<button type="button" onclick="return save()" class="btn bg-blue btn-block"><i class="icon-spinner11 mr-2"></i> Reset password</button>
						</div>
					</div>
				</form>
				<!-- /password recovery form -->
				
			</div>
			<!-- /content area -->
		</div>
		<!-- /main content -->

	</div>
</body>
<script src="<c:url value='assets/admin/js/pg_js/forget_pass.js'/>"></script>
</html>
