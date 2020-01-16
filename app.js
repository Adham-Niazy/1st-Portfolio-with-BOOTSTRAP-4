window.addEventListener('scroll',function() {
	document.getElementById('onScrolling').classList.add('scroll');
	if (pageYOffset == 0){
	document.getElementById('onScrolling').classList.remove('scroll');
}
});