// Autor: CS Tech
import './style/index'
import './js/modernizr-custom'
import $ from 'jquery'
window.jQuery = $;
window.$ = $;

$(document).ready(() => {
    $('.carouselProd').carousel({
        interval: 2500
    })
})



