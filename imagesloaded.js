// init Masonry
$(function(){
    console.log("page chargee!")
    var container= document.querySelector('.grid');
    var msnry = new Masonry( container, {"itemSelector": ".grid-item", "columnWidth": ".grid-item","percentPosition": "true"});
//   // layout Masonry after each image loads
//     container.imagesLoaded().progress( function() {
//     console.log("Nouvelle Image chargee")
//     msnry.layout();
//     });  
var imgLoad = imagesLoaded($('.grid'));
imgLoad.on( 'progress', function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    if (result === 'loaded'){
        msnry.layout();
        console.log("je rearrange la page");
    };
    console.log( 'image is ' + result + ' for ' + image.img.src );
});

//   .done( function( instance ) {
//     console.log('all images successfully loaded');
//   })
//   .fail( function() {
//     console.log('all images loaded, at least one is broken');
//   })
//   .progress( function( instance, image ) {
//     var result = image.isLoaded ? 'loaded' : 'broken';
//     console.log( 'image is ' + result + ' for ' + image.img.src );
//   });

})


