function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function (quoteData) {

            if (quoteData.quoteAuthor === '') {
                quoteData.quoteAuthor = 'Unknown';
            };

            $("#randomQuote").html("<p id='randomQuote'><i class=\"fa fa-quote-left\"></i>    " + quoteData.quoteText + "<br/> <div class=\"text-right\"> ‐" + quoteData.quoteAuthor + "</div></p>");
            $("#tweetMe").attr("href", "https://twitter.com/home/?status=" + quoteData.quoteText + ' - ' + quoteData.quoteAuthor);
        }
    });
}

function randomColor() {
    var colors = [
        '#1DD3B0',
        '#8C5383',
        '#B8B3E9',
        '#4A5899',
        '#FFD400',
        '#393E41',
        '#F06543',
        '#00A878',
        '#EADEDA',
        '#1E2019',
        '#EFF8E2',
        '#C94277',
        '#00100B',
        '#ADA8B6',
        '#2F0A28'
    ];
    var choosedColor = colors[(Math.floor(Math.random() * 16))];
    return choosedColor;
}

$(function () {
    randomQuote();
    randomColor();
});

$("#newQuote").click(function () {
    $('.quoteArea').css({'color': randomColor(), 'transition': 'all linear 0.2s'});
    randomQuote();
});
