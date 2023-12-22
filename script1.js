document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementsByClassName("navbar");
    const chem = document.getElementsByClassName("name");
    console.log(chem);
    const caraousel = document.querySelector(".carousel");
    var lastScrollTop = 0;
    navbar[0].classList.add("transparent");
    window.addEventListener("scroll", function () {
        var currentScrollTop = window.scrollY || document.documentElement.scrollTop;
        if (window.scrollY < caraousel.offsetHeight || window.scrollY === 0) {
            navbar[0].classList.add("transparent");
            chem[0].classList.remove("sup");
        }
        else {
            navbar[0].classList.remove("transparent");
            chem[0].classList.add("sup");
            
        }


        if (currentScrollTop > lastScrollTop)
        {
            navbar[0].classList.add("changePosition");
            chem[0].classList.remove("sup");
            console.log("done");
        } 
        else if (currentScrollTop < lastScrollTop) 
        {
            navbar[0].classList.remove("changePosition");
            chem[0].classList.add("sup");
        }


        lastScrollTop = currentScrollTop;
    });
})


// var scrollIndicator = document.getElementById('navbar');
// var lastScrollTop = 0;

// window.addEventListener('scroll', function () {
//     var currentScrollTop = window.scrollY || document.documentElement.scrollTop;

//     if (currentScrollTop > lastScrollTop) {
//         // Scrolling down
//         scrollIndicator.textContent = 'Scroll Direction: Down';
//     } else if (currentScrollTop < lastScrollTop) {
//         // Scrolling up
//         scrollIndicator.textContent = 'Scroll Direction: Up';
//     }

//     lastScrollTop = currentScrollTop;
// });