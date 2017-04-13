
// picture courtesy http://wallpaper-gallery.net/wallpapers/free-dark-wallpaper.html

var images = [];
function preload() {
    for (i = 0, length = preload.arguments; i < length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

$(document).ready(
    function(){

        preload(
            "./img/1.jpg",
            "./img/2.jpg",
            "./img/3.jpg",
            "./img/4.jpg"
        );


        $('.card.card_graphic').hover(
            function() {
                $('.card-container-bg-container').css('background-image', 'url("./img/1.jpg")');
            }
        );
        $('.card.card_uiux').hover(
            function() {
                $('.card-container-bg-container').css('background-image', 'url("./img/2.jpg")');
            }
        );
        $('.card.card_film').hover(
            function() {
                $('.card-container-bg-container').css('background-image', 'url("./img/3.jpg")');
            }
        );
        $('.card.card_photography').hover(
            function() {
                $('.card-container-bg-container').css('background-image', 'url("./img/4.jpg")');
            }
        );
    }
);
