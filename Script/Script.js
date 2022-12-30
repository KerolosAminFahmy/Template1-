let ScrollTop=document.getElementById("ScrollUp");
let DarkMode=document.querySelector(".darkLightMode");
let body=document.querySelector("body");
addEventListener("scroll",(event)=>{
  if(window.scrollY<250){
    ScrollTop.classList.add("Hide");
  }else{
    ScrollTop.classList.remove("Hide");
  }
})

ScrollTop.onclick=()=>{
		$('body,html').animate({scrollTop: 0 , }, 1000
      );
  };

DarkMode.onclick=()=>{
  body.classList.toggle("dark");
}
$(window).on("load", function () {
  $(".spinner").fadeOut(2000, function () {
      $(this).parent().fadeOut(2000, function () {
          $(this).remove();
      });
  });
  AOS.init({duration: 1200, once: true });
});
