(function($) {

    $.getJSON('factions.json', function(data) {
        $.each(data.factions, function(ind, dat) {
            $('.column-1').append('<div class="faction-box"><h2>' + dat + '</h2></div>');
        });
    });

    $('.container').on('click', '.faction-box', function(e) {
        $('.active').removeClass('active-faction');
        $(this).toggleClass('active-faction');
        console.log($(this).text());
    });

})(jQuery)