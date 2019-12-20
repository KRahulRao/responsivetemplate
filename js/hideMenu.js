$(document).ready(function(){
 $(function(){
     $("#showPhoneNav").click(function(){
         $("#headernav").slideToggle('normal',function() {
             if ($("#headernav").is(':visible')){
                 $("#showPhoneNav").text("Hide Navigation");
             }else{
                 $("#showPhoneNav").text("Show Navigation");
             }
         });
     })
 });
});