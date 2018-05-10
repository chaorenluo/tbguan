(function(){
      
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    var swiper_css="<link rel='stylesheet' type='text/css' media='screen' href='../css/swiper-3.4.2.min.css' />";
    var lightgallery_css="<link rel='stylesheet' type='text/css' media='screen' href='../css/lightgallery.min.css' /> ";
    var swiper_js="<script src='../js/swiper-3.4.2.jquery.min.js'></script>";                   
    var lightgallery_js="<script src='../js/lightgallery.min.js'></script>";
    var s1="<script type='text/javascript' src='http://api.map.baidu.com/api?key=&v=1.1&services=true'></script>";
    var main="    <script src='../js/main.js'></script>"
     $("head").after(lightgallery_css,swiper_css);          
	$('body').append(swiper_js);
    //$('body').append(lightgallery_js);
    $('body').append(s1);
   // $('body').append(main);
//      var mySwiper = new Swiper('.swiper-container', {
//       autoplay: 3000,//可选选项，自动滑动
//   });
//   lightGallery(document.getElementById('lightgallery'));
//   lightGallery(document.getElementById('lightgallery1'));
//   lightGallery(document.getElementById('lightgallery2'));
//   lightGallery(document.getElementById('lightgallery3'));
//   PDFObject.embed("../pdf/t3.pdf", "#example3");
//   PDFObject.embed("../pdf/t4.pdf", "#example2");
//   PDFObject.embed("../pdf/tx2.pdf", "#example1");
} else {
   
}
})()