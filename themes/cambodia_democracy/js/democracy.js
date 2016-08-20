// Custom JavaScript code for Khmer Democracy
jQuery(document).ready(function($){
   if($(window).width() > 768){
       $('.image-gallery').hover(function(){
        $(this).find('.gallery-view-title').stop().slideToggle(200);
       });
   }
   
});


