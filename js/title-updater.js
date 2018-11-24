
$(document).ready(function(){

	function numberWithCommas(x) {
    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

    var n = 0;
	var updater = setInterval(function(){ 
	if (n < 1000000000){
		document.title = numberWithCommas(n) + " Bits";
		n = n + Math.floor(Math.random() * 999999);
	}else{
		document.title = "A Billion Bits";
		clearInterval(updater);
	}
	
	}, 1);

});
