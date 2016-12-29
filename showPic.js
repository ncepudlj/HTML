
 function prepareGallery(){
 	if (!document.getElementsByTagName) {
	return false;
    }
  if (!document.getElementById) {
  	return false;
  }
  var gallery=document.getElementById("imagegallery");
  var links=gallery.getElementsByTagName("a");
  for (var i = 0; i <links.length; i++) {
  	links[i].onclick=function(){
  		return showPic(this)?false:true;
  	}
  }
 }
 function showPic(whicpic){
 	if (!document.getElementById("placeholder")) {
 		return false;
 	}
			var source=whicpic.getAttribute("href");
			var placeholder=document.getElementById("placeholder");
			placeholder.setAttribute("src",source);
			if (document.getElementById("description")) {
				if (whicpic.getAttribute("title")) {
					var text=whicpic.getAttribute("title");
				}
				else {
					var text="";
				}

			var description=document.getElementById("description");
			description.firstChild.nodeValue=text;	
			}
			return true;		
		}
		
		function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
 addLoadEvent(prepareGallery);


