// init Masonry
$(function(){
    console.log("page chargee!")
    var container= document.querySelector('.grid');
    var msnry = new Masonry( container, {"itemSelector": ".grid-item", "columnWidth": ".grid-item","percentPosition": "true"});
    // <!-- data-masonry='{ ""columnWidth": ".grid-sizer"": ".grid-sizer", "itemSelector": ".grid-item", "percentPosition": "true" }'
    var list = document.getElementsByClassName('grid');
    for (i=0;i<list.length;i++){
        list[i].setAttribute('data-masonry', '{ ""columnWidth": ".grid-sizer"", "itemSelector": ".grid-item", "percentPosition": "true" }');
    }
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


