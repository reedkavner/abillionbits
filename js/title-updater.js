import { CountUp } from './vendor/countUp.min.js';

window.onload = function() {
	var howMany = $('#how-many');
    const options = {
        startVal: 0,
        duration: 3
    };
    let count = new CountUp('how-many', 999999999, options);
    if (!count.error) {
        count.start(titleText);
    } else {
    	howMany.text('A Billion');
        console.error(count.error);
    }

    function titleText(){
    	setTimeout(function(){ howMany.text('A Billion'); }, 100);
    }
}