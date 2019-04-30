$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300){
      $(".navbar").css({"background-color" : "rgba(47,47,47,0.4)"})
      $("#navl1").css({"color" : "#ffffff"})
      $("#navl2").css({"color" : "#ffffff"})
      $("#navl3").css({"color" : "#ffffff"})
      $("#btnnavbar").css({"color" : "#ffffff"})
    }
    else {
      $(".navbar").css({"background-color" : "transparent"})
      $("#navl1").css({"color" : "grey"})
      $("#navl2").css({"color" : "grey"})
      $("#navl3").css({"color" : "grey"})
      $("#btnnavbar").css({"color" : "grey"})
      }
  })
})

// Preloading Page
$(document).ready(function() {
  //Preloader
  $(window).on("load", function() {
    preloaderFadeOutTime = 2000;
    function hidePreloader() {
      var preloader = $('.spinner-wrapper');
      preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
  });
});
