$(function () {
    $('.navigation > li').hover(function () {
        $(this).children("ul").slideToggle(200);
    })
})