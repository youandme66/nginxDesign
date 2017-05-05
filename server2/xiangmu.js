function land()
{
	var user=document.getElementById("user").value;
	var password=document.getElementById("password").value;
	var error=document.getElementById("error");
	if(user=="sxtyyxz@sina.com"&&password=="001520258")
	{
		alert("µÇÂ½³É¹¦£¡");
		error.innerHTML="";
		window.open("http://study.163.com","newwindow","width=300px,height=400px,left=100px,top=100px,resizable=no, toolbar=no, menubar=no, scrollbars=no,  location=no, status=no");
	}
	else
	{
		alert("µÇÂ½Ê§°Ü£¡\nÕËºÅ»òÃÜÂë´íÎó£¡");
		error.innerHTML="ÕËºÅ»òÃÜÂë´íÎó£¡";
	}
}
