var ids = []; // [1234, 2345] 식으로 id넣어놓으면 됨.
var lists = document.querySelectorAll("table tbody table tbody tr table tbody table tr td table tbody tr");
for (var  i = 0;i < lists.length;i ++) {
	var a = lists[i].querySelector("td font a");
	if (a == null) continue;
	var link = a.getAttribute("href");
	var id = parseInt(link.substring(link.indexOf("LB_no=") + 6, link.indexOf("&cmd=")));
	if (ids.indexOf(id) >= 0) {
		window.open("https://mygarim.cafe24.com/sugang/student/order.php?LB_no=" + id + "&cmd=&flag=&y1=&y2=&hh=&field=&str=&returl=consent.php");
	}
}
location.reload()
