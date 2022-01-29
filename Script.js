$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    })
    // $('#login').click(function(){
    //     $('.login-form').addClass('popup');
    // })

    // $('.login-form form .fa-times').click(function(){
    //     $('.login-form').removeClass('popup');
    // })

    // $(window).on('load scroll',function(){
    //     $('#menu').removeClass('fa-times');
    //     $('.navbar').removeClass('nav-toggle');

    //     // $('.login-form').removeClass('popup');
    // })
    
    // -------------------------------------------------------------------------------
 

})
var videoPlayer = document.getElementById("videoPlayer");
    var myVideo = document.getElementById("myVideo");
    function playVideo(file){
        myVideo.src = file;
        videoPlayer.style.display = "block";
    }
    function stopVideo(){
        
        videoPlayer.style.display = "none";
    }

    const list = document.querySelectorAll('.list-active');
    function activeLink(){
        list.forEach((item) =>
        item.classlist-active.remove('active') );
        this.classlist-active.add('active');
    }
    item.forEach((item) =>
    item.addEventListner('click',activeLink));

$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active'); 
    })


function myFunction1() {
  var x = document.getElementById("course-video1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction2() {
    var x = document.getElementById("course-video2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction3() {
    var x = document.getElementById("course-video3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction4() {
    var x = document.getElementById("course-video4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction5() {
    var x = document.getElementById("course-video5");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction6() {
    var x = document.getElementById("course-video6");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }