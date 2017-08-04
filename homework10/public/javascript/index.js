var flag = {
	one:0,
	two:0,
	three:0,
	errorcode:""
}
$().ready(function () {
	$("#username").change(checkname);
	$("#username").click(nameReq);
	$("#password").click(passwordReq);
	$("#passwordCheck").click(checkPasswordReq);
	$("#passwordCheck").change(CheckpasswordSame);
	$("#password").change(checkPasswordForm);
	$("#reset").click(reset)
	$("#submit").click(subFunc)
})
function reset() {
	$.each($("input[type = 'text']"), function () {
		$(this).val("");
	})
	$.each($("input[type = 'password']"), function () {
		$(this).val("");
	})
}
function subFunc() {
	if (!flag.one) flag.errorcode += "用户名不合法\n";
	if (!(flag.one&&flag.two&&flag.three)) {
		alert(flag.errorcode);
		flag.errorcode = "";
		return false;
	}
}
function nameReq() {
	$("#errorInfo").attr("class","err");
	$("#errorInfo").text("用户名6~18位英文字母、数字或下划线，必须以英文字母开头");
}

function passwordReq() {
	$("#errorInfo").attr("class", "err");
	$("#errorInfo").text("6~12位数字、大小写字母、中划线、下划线")
}
function checkPasswordReq() {
	$("#errorInfo").attr("class", "err");
	$("#errorInfo").text("请确认密码")
}
function checkname() {
	var patten = new RegExp(/^\w+$/);
	var name = $(this).val();
	if (!patten.test(name)||name.length > 18||
		name.length < 6||(name[0] >= '0'&& name[0] <= '9')||
		name[0] == '_') {
		$(this).attr("class", "red")
		flag.one = 0;
	} else {
		$("#errorInfo").text("请输入信息");
		$("#errorInfo").attr("class","correct");
		$(this).attr("class", "green")
		flag.one = 1;
	}
}
function checkPasswordForm() {
	var patten = new RegExp(/^[a-z0-9_-]{6,12}$/);
	var name = $(this).val();
	if (!patten.test(name)) {
		$(this).attr("class", "red")
		flag.two = 0;
	} else {
		$("#errorInfo").text("请输入信息");
		$("#errorInfo").attr("class","correct");
		$(this).attr("class", "green")
		flag.two = 1;
	}
}
function CheckpasswordSame() {
	var password = $("#password").val();
	var check = $(this).val();
	if (password != check) {
		$(this).attr("class", "red");
		$("#errorInfo").text("密码不一致");
		flag.three= 0;
	} else {
		$("#errorInfo").text("请输入信息");
		$("#errorInfo").attr("class","correct");
		$(this).attr("class", "green")
		flag.three = 1;
	}
}

