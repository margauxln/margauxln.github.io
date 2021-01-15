// init Masonry
$(function(){
    console.log("page chargee!")
    var container= document.querySelector('.grid');
    var msnry = new Masonry( container, {"itemSelector": ".grid-item", "columnWidth": ".grid-item","percentPosition": "true"});
    var imgLoad = imagesLoaded($('.grid'));
    imgLoad.on( 'progress', function( instance, image ) {
        var result = image.isLoaded ? 'loaded' : 'broken';
        if (result === 'loaded'){
            msnry.layout();
            console.log("je rearrange la page");
        };
        console.log( 'image is ' + result + ' for ' + image.img.src );
    });
})


