// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


document.querySelectorAll('.buttondown').forEach(buttondown => {
  buttondown.addEventListener('click', function() {
    let scrollDistance = document.documentElement.clientHeight;
    
    scrollDistance *= 1;
    
    window.scrollBy(0, scrollDistance);
  });
});



var item = document.getElementById("events-item-2");
item.addEventListener("mouseover", funcadd1, false);
item.addEventListener("mouseout", funcrem1, false);
image1 = document.getElementById("collage-image-1");
image2 = document.getElementById("collage-image-2");
image3 = document.getElementById("collage-image-3");
image4 = document.getElementById("collage-image-4");

function funcadd1()
{ 
  image1.classList.add("happyhour-image-1");
  image2.classList.add("happyhour-image-2");
  image3.classList.add("happyhour-image-3");
  image4.classList.add("happyhour-image-4");
}

function funcrem1()
{  
  image1.classList.remove("happyhour-image-1");
  image2.classList.remove("happyhour-image-2");
  image3.classList.remove("happyhour-image-3");
  image4.classList.remove("happyhour-image-4");
}

var item = document.getElementById("events-item-3");
item.addEventListener("mouseover", funcadd2, false);
item.addEventListener("mouseout", funcrem2, false);
image1 = document.getElementById("collage-image-1");
image2 = document.getElementById("collage-image-2");
image3 = document.getElementById("collage-image-3");
image4 = document.getElementById("collage-image-4");

function funcadd2()
{  // not needed since item is already global, 
   // I am assuming this is here just because it's sample code?
   // var item = document.getElementById("button"); 
   image1.classList.add("talksandworkshops-image-1");
   image2.classList.add("talksandworkshops-image-2");
   image3.classList.add("talksandworkshops-image-3");
   image4.classList.add("talksandworkshops-image-4");

}

function funcrem2()
{  
  image1.classList.remove("talksandworkshops-image-1");
  image2.classList.remove("talksandworkshops-image-2");
  image3.classList.remove("talksandworkshops-image-3");
  image4.classList.remove("talksandworkshops-image-4");

}

var item = document.getElementById("events-item-4");
item.addEventListener("mouseover", funcadd3, false);
item.addEventListener("mouseout", funcrem3, false);
image1 = document.getElementById("collage-image-1");
image2 = document.getElementById("collage-image-2");
image3 = document.getElementById("collage-image-3");
image4 = document.getElementById("collage-image-4");

function funcadd3()
{  // not needed since item is already global, 
   // I am assuming this is here just because it's sample code?
   // var item = document.getElementById("button"); 
   image1.classList.add("simutechprojects-image-1");
   image2.classList.add("simutechprojects-image-2");
   image3.classList.add("simutechprojects-image-3");
   image4.classList.add("simutechprojects-image-4");

}

function funcrem3()
{  
  image1.classList.remove("simutechprojects-image-1");
  image2.classList.remove("simutechprojects-image-2");
  image3.classList.remove("simutechprojects-image-3");
  image4.classList.remove("simutechprojects-image-4");

}


window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
windowheight = document.documentElement.clientHeight;

Home = document.getElementById("Home");
Home.addEventListener('click', function() {
  scrollTo(0, 0);
})

AboutUs = document.getElementById("AboutUs");
AboutUs.addEventListener('click', function() {
  scrollTo(0, (windowheight/0.97));
})

Events = document.getElementById("Events");

Events.addEventListener('click', function() {
  scrollTo(0, ((2*windowheight)/1.01));
})

Blogs = document.getElementById("Blogs");

Blogs.addEventListener('click', function() {
  scrollTo(0, (4*windowheight/0.99));
})

// For animation on projects page
$(".Click-here").on('click', function() {
  $(".custom-model-main").addClass('model-open');
}); 
$(".close-btn, .bg-overlay").click(function(){
  $(".custom-model-main").removeClass('model-open');
});

