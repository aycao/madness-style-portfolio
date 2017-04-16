
// picture courtesy http://wallpaper-gallery.net/wallpapers/free-dark-wallpaper.html

$(document).ready(
    function(){

        // preload images
        (new Image()).src = './img/1.jpg';
        (new Image()).src = './img/2.jpg';
        (new Image()).src = './img/3.jpg';
        (new Image()).src = './img/4.jpg';


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
