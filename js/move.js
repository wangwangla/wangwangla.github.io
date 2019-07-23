/*var select = document.getElementById("select");

var url = document.getElementById("url");
var video = document.getElementById("video");
button.onclick=function(){
var ur1=select.value;
var ur2=url.value;
var v = '<iframe src="'+ur1+ur2+'"name="iframe_a"></iframe>';
console.log(ur1+ur2);
video.innerHTML=v;
};*/
var select = document.getElementById("select");
var inputUrl = document.getElementById("url");
console.log(inputUrl.value);
console.log("sssssssss");


var button = document.getElementById("button");
button.onclick=function(){
	var url=select.value+inputUrl.value;
	window.open(url, '_blank', 'height=500, width=600, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no') 
}
