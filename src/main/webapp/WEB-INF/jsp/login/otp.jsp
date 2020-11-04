<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>OTP</title>

	<!-- Global stylesheets -->
	<link href="assets/admin/css/iconmoon/styles.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/bootstrap_limitless.min.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/layout.min.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/components.min.css" rel="stylesheet" type="text/css">
	<link href="assets/admin/css/colors.min.css" rel="stylesheet" type="text/css">
	<!-- /global stylesheets -->
	<style>
	#partitioned {
		 padding-left: 15px;
		 letter-spacing: 42px;
		 border: 0;
		 background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);
		 background-position: bottom;
		 background-size: 50px 1px;
		 background-repeat: repeat-x;
		 background-position-x: 35px;
		 width: 220px;
		 min-width: 220px;
		}

		#divInner{
		  left: 0;
		  position: sticky;
		}

		#divOuter{
		  width: 190px; 
		  overflow: hidden;
		}
	</style>
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
								<i class="icon-key icon-2x text-warning border-warning border-3 rounded-round p-3 mb-3 mt-1"></i>
								<h5 class="mb-0">Enter 4-digit password</h5>
							</div>

								<div id="divOuter">
									<div id="divInner">
									 <input id="partitioned" type="text" maxlength="4" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  onKeyPress="if(this.value.length==4) return false;"/> 
			  						</div>
								</div>
							<br/>
							<span id="data"></span>
							<br/>
							<br/>
							<button type="button" onclick="save()" class="btn bg-blue btn-block">Submit</button>
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
<script src="<c:url value='assets/admin/js/pg_js/otp.js'/>"></script>
</html>
