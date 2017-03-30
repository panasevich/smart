$(document).ready(function(){
    $('.nav__user-name').click(function(){
        $(this).parent().find('.tooltip').toggleClass('active');
    })
});