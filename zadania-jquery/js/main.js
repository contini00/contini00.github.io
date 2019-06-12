$(function () {
	'use strict';
let btn = $('#btn');
let square = $('#square');
let sign = $('#end');

btn.click(function(){
    // square.removeClass('square');
    square.animate({
        left: '100px',
        height: '100px',
        width: '100px',
}, 3000, color);

})

const color = () => {
    square.addClass('square2');

    setTimeout(function() {
        sign.text('Animacja Zakończona');
    }, 5000);
    
}
});
