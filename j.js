 //动态给js添加class属性
 function addClass(element, value) {
  if(!element.className) {
   element.className = value; //如果element本身不存在class,则直接添加class为value的值
  } else {
   element.className += " "+value; //如果element之前有一个class值，注意中间要多一个空格,然后再加上value的值
  }
 }
  //鼠标经过时高亮显示
 function highlightRows() {
  var rows = document.getElementsByTagName("tr");
  for(var i=0; i<rows.length; i++) {
   rows[i].oldClassName = rows[i].className; //首先保存之前的class值
   rows[i].onmouseover = function() {
    addClass(this, "highlight"); //鼠标经过时添加class为highlight的值
   }
   rows[i].onmouseout = function() {
    this.className = this.oldClassName; //鼠标离开时还原之前的class值
   }
  }
 }
 
 // window.onload = function() {
 //  highlightRows();
 // }
 $(document).ready(function (argument) {
	$("tr").hover(function () {
    	$(this).addClass("highlight");
  		},
  		function () {
    		$(this).removeClass("highlight");
  			}
		);
})
