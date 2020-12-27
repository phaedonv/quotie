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
        '#D6EFFF',
        '#FFF275',
        '#D56AA0',
        '#F42C04',
        '#77CBB9',
        '#7CFEF0',
        '#6BFFB8',
        '#F3E8EE',
        '#DB504A',
        '#E3B505',
        '#96F550',
        '#3C91E6',
        '#EED2CC',
        '#97F9F9',
        '#C33C54'
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
