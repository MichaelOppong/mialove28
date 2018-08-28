// JavaScript File
$(document).ready(function(){
    var pictures=["photos/im1.jpg","photos/im2.jpg","photos/im3.jpg","photos/im4.jpg","photos/im5.jpg","photos/im6.jpg","photos/im7.jpg","photos/im8.jpg","photos/im9.jpg","photos/im10.jpg","photos/im11.jpg","photos/im12.jpg","photos/im13.jpg","photos/im14.jpg","photos/im15.jpg","photos/im16.jpg","photos/im17.jpg","photos/im18.jpg","photos/im19.png","photos/im20.jpg","photos/im21.jpg","photos/im22.jpg","photos/im23.jpg","photos/im24.jpg","photos/im25.jpg","photos/im26.jpg","photos/im27.jpg","photos/im28.jpg","photos/im28.jpg"]
    $("img").click(function(){
        var randomPic=Math.floor(Math.random()*pictures.length)
        console.log(randomPic);
        $("img").attr("src",pictures[randomPic]);
    });
});

