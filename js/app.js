$(".message").ready(function() {	

	$(this).anima3d({
		rotateX:"100deg", 
		rotateY:"100deg", 
		rotateZ:"100deg"}, 400).anima2d({scale:0.6}, 400);

	$(this).anima3d({
		rotateX:"0deg", 
		rotateY:"0deg", 
		rotateZ:"0deg"}, 400).anima2d({scale:1}, 400);

});