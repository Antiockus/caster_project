var currentFaction = '';
var currentCaster = '';
var casterDetailTemplate = $('#caster-details').html();
var template = Handlebars.compile(casterDetailTemplate);

(function($) {
    var jsonData;
    var casterInfo;

    $.getJSON('factions.json', function(data) {
        jsonData = data.factions;
        $.each(data.factions, function(ind, dat) {
            $('.column-1').append('<div class="faction-box"><h2>' + ind + '</h2></div>');
        });
    });

    $.getJSON('casters.json', function(data) {
        casterInfo = data;
        // $.each(casterInfo, function(dat, ind) {
        //     console.log(ind.caster_one.name);
        // })
    });

    $('.container').on('click', '.faction-box', function(e) {
        $('.active-faction').removeClass('active-faction');
        $(this).addClass('active-faction');
        currentFaction = $(this).text();
        $('.caster-list').empty();
        $.each(jsonData[currentFaction], function(ind, dat) {
            $('.caster-list').append('<div class="caster-box"><h2>' + dat + '</h2></div>');
        });
    });

    $('.container').on('click', '.caster-box', function() {
        $('.active-caster').removeClass('active-caster');
        $(this).addClass('active-caster');
        currentCaster = $(this).text();
        // console.log(casterInfo.casters[currentCaster]);
        var context = casterInfo.casters[currentCaster];
        var html = template(context);
        $('.detail-box').html(html);
    });

})(jQuery)