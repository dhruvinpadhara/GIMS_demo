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
		<!-- Core JS files -->
	<script src="assets/admin/js/jquery.min.js"></script>
	<script src="assets/admin/js/bootstrap.bundle.min.js"></script>
	<script src="assets/admin/js/blockui.min.js"></script>

	<script src="assets/js/app.js"></script>

</head>
<body>
<div class="page-content">
		<div class="content-wrapper">
			<div class="content d-flex justify-content-center align-items-center">
				<form autocomplete="off" class="login-form" method="post">
					<div class="card mb-0">
						<div class="card-body">
							<div class="text-center mb-3">
								<i class="icon-lock icon-2x text-warning border-warning border-3 rounded-round p-3 mb-3 mt-1"></i>
							
								<span class="d-block text-muted"></span>
							</div>
							
							<div class="form-group">
								<label>Password</label>
								<input type="text" class="form-control" id="pass" name="mobile_number" placeholder="enter password">
								<span id="password"></span>
							</div>
							<div class="form-group">
								<label>Confirm Password</label>
								<input type="text" class="form-control" id="cpass" name="mobile_number" placeholder="enter password">
								<span id="cpassword"></span>
							</div>
							<span id="data"></span>
							<br/>
							<button type="button" onclick="return save()" class="btn bg-blue btn-block">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
<script src="<c:url value='assets/admin/js/pg_js/confirm_pass.js'/>"></script>
</html>
