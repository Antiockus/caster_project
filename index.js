var currentFaction = '';
var currentCaster = '';
var casterDetailTemplate = $('#caster-details').html();
var template = Handlebars.compile(casterDetailTemplate);

(function ($) {
    var jsonData;
    var casterInfo;

    $.getJSON('factions.json', function (data) {
        jsonData = data.factions;
        $.each(data.factions, function (ind, dat) {
            $('#factions').append("<option value='" + ind + "' class='faction-box'> " + ind + " </option>");
        });
    });

    //SETS THE CASTERINFO VARIABLE TO THE DATA
    $.getJSON('casters.json', function (data) {
        casterInfo = data;
        // $.each(casterInfo, function(dat, ind) {
        //     console.log(ind.caster_one.name);
        // })
    });

    //THIS ACTION IS FOR WHEN THE USER CLICKS A FACTION
    //IT POPULATES THE CASTER LIST
    $('.container').on('change', '#factions', function (e) {
        $('.pulse').removeClass('animated pulse infinite');
        $('.animated').addClass('pulse infinite');
        currentFaction = $('#factions').val();
        $('#casters').empty();
        $('#casters').append('<option value="" disabled selected>Choose Caster</option>');
        $.each(jsonData[currentFaction], function (ind, dat) {
            $('#casters').append('<option class="caster-box" value="' + dat + '">' + dat + '</option>');
        });
    });

    $('.container').on('change', '#casters', function () {
        // $('.active-caster').removeClass('active-caster');
        // $(this).addClass('active-caster');
        $('.infinite').removeClass('animated pulse infinite');
        currentCaster = $('#casters').val();
        // console.log(casterInfo.casters[currentCaster]);
        var context = casterInfo.casters[currentCaster];
        var html = template(context);
        $('.detail-box').html(html);
    });

})(jQuery)