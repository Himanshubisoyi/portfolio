

// Header Sicky js Start
jQuery(window).scroll(function () {
    var sticky = jQuery('#header'),
        scroll = jQuery(window).scrollTop();
    if (scroll >= 80) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});
// Header Sicky js End


// ************************************* Home Page JS Start *************************************\\
// Back To top Js Start
jQuery(document).ready(function () {
    const topBtn = jQuery(".top-btn");
    if (topBtn.length) {
        jQuery(".top-btn").hide();
        jQuery(window).scroll(function () {
            if (jQuery(document).scrollTop() > 45) {
                jQuery(".top-btn").show();
            } else {
                jQuery(".top-btn").hide();
            }
        });
        jQuery(".top-btn").click(function () {
            jQuery("html, body").animate({ scrollTop: 0 }, 800);
        });
    }
});
// Back To top Js End
// ************************************* Home Page JS End *************************************\\


// ************************************* Common Button Js Animation Start  *************************************\\
$( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
   
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
 
 });
 
 $( ".button_su_inner" ).mouseleave(function(e) {
 
      var parentOffset = $(this).offset(); 
 
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
      $(this).prev(".su_button_circle").removeClass("explode-circle");
      $(this).prev(".su_button_circle").addClass("desplode-circle");
 
 });

 $( ".resume-btn-ani" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
   
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplod-circle");
    $(this).prev(".su_button_circle").addClass("explod-circle");
 
 });
 
 $( ".resume-btn-ani" ).mouseleave(function(e) {
 
      var parentOffset = $(this).offset(); 
 
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
      $(this).prev(".su_button_circle").removeClass("explod-circle");
      $(this).prev(".su_button_circle").addClass("desplod-circle");
 
 });
// ************************************* Common Button Js Animation End  *************************************\\

// ************************************* Text Animation Start  *************************************\\



const app = document.getElementById('app');
if (app) {
    var typewriter = new Typewriter(app, { loop: true });
//     typewriter.typeString('Lab Equipement')
//         .pauseFor(2500)
//         .deleteAll()
//         .typeString('Medical Equipement')
//         .pauseFor(2500)
//         .deleteAll()
//         .typeString('Equipement')
//         .pauseFor(2500)
//         .start();
// }
    
typewriter.typeString('Web Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Frontend Developer')
    .pauseFor(2500)
    .start();
}

// ************************************* Text Animation End  *************************************\\

// ************************************* Number Counter Start  *************************************\\
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 3, 3000);
    counter("count2", 0, 120, 2500);
    counter("count3", 30, 150, 3000);
   });
// *************************************  Number Counter End  *************************************\\

// *************************************  Product Details Content Start  *************************************\\
    document.querySelectorAll('.toggle-details').forEach(button => {
        button.addEventListener('click', () => {
            const wrapper = button.parentElement; // Get the parent .proje-bx-wr
            wrapper.classList.toggle('active'); // Toggle the active class
            
            // Update button text
            if (wrapper.classList.contains('active')) {
                button.textContent = 'Hide Details';
            } else {
                button.textContent = 'View Details';
            }
        });
    });
// *************************************  Product Details Content End  *************************************\\


// *************************************  Portfolio Tab Start  *************************************\\
// Example for Portfolio Tab
const tabContainer = document.querySelector(".portf-wrap");
if (tabContainer) {
    const navList = tabContainer.querySelectorAll(".port-menu button");
    const tabList = tabContainer.querySelectorAll(".tab");

    for (let i = 0; i < navList.length; i++) {
        navList[i].addEventListener('click', (evt) => {
            let currentLink = tabContainer.querySelector("button.active");
            let currentTab = tabContainer.querySelector(".tab.active");

            currentLink.classList.remove("active");
            navList[i].classList.add("active");

            currentTab.classList.remove("active");
            tabList[i].classList.add("active");
        });
    }
}

// *************************************  Portfolio Tab End  *************************************\\



// *************************************  Start Inspect JS Start  *************************************\\

// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
//     alert('Right-click is disabled.');
// });

// document.addEventListener('keydown', function (e) {

//     if (e.key === 'F12' || e.code === 'F12') {
//         e.preventDefault();
//         alert('Inspect Element is disabled.');
//     }

//     if (e.ctrlKey && e.shiftKey && e.key === 'I') {
//         e.preventDefault();
//         alert('Inspect Element is disabled.');
//     }

//     if (e.ctrlKey && e.shiftKey && e.key === 'J') {
//         e.preventDefault();
//         alert('Console is disabled.');
//     }

//     if (e.ctrlKey && e.key === 'u') {
//         e.preventDefault();
//         alert('View Source is disabled.');
//     }

//     if (e.ctrlKey && e.key === 's') {
//         e.preventDefault();
//         alert('Saving the page is disabled.');
//     }

//     if (e.ctrlKey && e.key === 'p') {
//         e.preventDefault();
//         alert('Printing is disabled.');
//     }
// });

// document.addEventListener('keydown', function (e) {
//     if (e.key === 'F12') {
//         e.preventDefault();
//     }

//     if (e.ctrlKey && e.shiftKey && e.key === 'I') {
//         e.preventDefault();
//     }

//     if (e.ctrlKey && e.shiftKey && e.key === 'J') {
//         e.preventDefault();
//     }

//     if (e.button === 2) {
//         e.preventDefault();
//         alert('Right-clicking is disabled.');
//     }
// });

// *************************************  Stop Inspect JS End *************************************\\

// *************************************  Menu Active JS start *************************************\\
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    const menuLinks = document.querySelectorAll(".menu-link");

    let isActiveSet = false;

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
            isActiveSet = true;
        } else {
            link.classList.remove("active");
        }
    });

    if (!isActiveSet) {
        const defaultMenu = document.querySelector(".about .menu-link");
        if (defaultMenu) {
            defaultMenu.classList.add("active");
        }
    }
});
// *************************************  Menu Active JS End  *************************************\\

// *************************************  Switch Color  JS Start *************************************\\
jQuery(document).ready(function () {
    jQuery('.switcher-btn').click(function () {
        jQuery('html').toggleClass('open-color');
    });
});
jQuery(document).ready(function () {
    const colorClasses = {
        'bg-color1': 'teal-green',
        'bg-color2': 'pink',
        'bg-color3': 'yellow',
        'bg-color4': 'blue',
        'bg-color5': 'sky',
        'bg-color6': 'green',
    };

    jQuery('.color-btn').click(function () {
        const allClasses = Object.values(colorClasses).join(' ');
        jQuery('html').removeClass(allClasses);
        
        const classToAdd = colorClasses[jQuery(this).attr('class').split(' ').pop()];
        jQuery('html').addClass(classToAdd);
    });
});

// *************************************  Switch Color  JS End*************************************\\

