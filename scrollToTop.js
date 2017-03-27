var scrollToTop = (function(){
	var delta;
	var time;
	var speed;
	var deltaY;
	var id=null;
	function scrollToTop() {
		var y=window.scrollY;
		if(y>0){
			delta = delta + speed/2;
			y=y-delta;
			window.scrollTo(0,y);
		}
		else{
			clearInterval(id);
		}
	}
	var initialize = function(configration) {
		speed = configration.speed;
		time = configration.time;
		delta = speed;
		scrollElement=document.getElementById("scroll-to-top");
		scrollElement.addEventListener("click",function(){
		id=setInterval(scrollToTop,time);
		});
	};
	return initialize;
}());