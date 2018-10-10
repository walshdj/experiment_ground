//Overkill in complexity
const materializeIndex = name =>  {
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('.datepicker').datepicker({
        disableWeekends: true,
        yearRange: 1
    });
    $('.dropdown-trigger').dropdown();
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();
    $('select').formSelect();
    $('select').siblings('input').attr("data-constrainwidth", false);


};


export default materializeIndex;