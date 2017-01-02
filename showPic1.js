function preparePlaceholder(){
  if (!document.createElement) {return false;}
  if (!document.createTextNode) {return false;}
  if (!document.getElementById) {return false;}
  if (!document.getElementById("imagegallery")) {return false;}
  var placeholder=document.createElement("img");//创建一个元素节点img
  placeholder.setAttribute("id","placeholder");
  placeholder.setAttribute("src","images/placeholder.gif");
  placeholder.setAttribute("alt","My iamge gallery");
  var description=document.createElement("p");//创建一个元素节点P
  description.setAttribute("id","description");
  var desctext=document.createTextNode("Choose an  image!");//创建一个文本节点
  description.appendChild(desctext);
  var gallery=document.getElementById("imagegallery");
  insertAfter(placeholder,gallery);
  insertAfter(description,placeholder);
}

function insertAfter(newElement,targetElement){
  var parent=targetElement.parentNode;
  if (parent.lastChild==targetElement) {
    parent.appendChild(newElement);
  }
  else{
    parent.inseerBefore(newElement,targetElement.nextSibling);
  }
}

 function prepareGallery(){
 	if (!document.getElementsByTagName) {
	return false;
    }
  if (!document.getElementById) {
  	return false;
  }
  if (!document.getElementById("imagegallery")) {return false;}
  var gallery=document.getElementById("imagegallery");
  var links=gallery.getElementsByTagName("a");
  for (var i = 0; i <links.length; i++) {
  	links[i].onclick=function(){
  		return showPic(this);
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
			return false;		
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
addLoadEvent(preparePlaceholder);
 addLoadEvent(prepareGallery);


