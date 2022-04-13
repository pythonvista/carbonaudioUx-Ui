$('.post-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1.2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1.08
          }
        }
      ]
   
});
$('.post-wrapper-g').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 4.2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 2.06
        }
      }
    ]
 
});
$('.authors__wrap').slick({
  slidesToShow: 6,
  slidesToScroll: 2,
  prevArrow: false,
  nextArrow: false,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 4.1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '29px',
          slidesToShow: 3.26
        }
      }
    ]
 
});

$('.books__wrap').slick({
  slidesToShow: 6,
  slidesToScroll: 2,
  prevArrow: false,
  nextArrow: false,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 4.1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 2.96
        }
      }
    ]
 
});

// $('.continue__wrap').slick({
//   slidesToShow: 6,
//   slidesToScroll: 2,
//   prevArrow: false,
//   nextArrow: false,
//   autoplay: false,
//   autoplaySpeed: 2000,
//   responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '10px',
//           slidesToShow: 4.1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '0',
//           slidesToShow: 2.96
//         }
//       }
//     ]
 
// });







function openBtn()
{

var mq = window.matchMedia( "(max-width: 900px)" );
if (mq.matches) {
  document.getElementById("leftMenu").style.width = "100%";
  
}else{
  document.getElementById("leftMenu").style.width = "250px";
}
           
}
        
function closeBtn()
{
document.getElementById("leftMenu").style.width = "0";
}

function openSearch()
{
  var mq = window.matchMedia( "(max-width: 900px)" );

if (mq.matches) {
  document.getElementById("search").style.width = "100%";
  
}else{
  document.getElementById("search").style.width = "450px";
}
           
}
        
function closeBtns()
{
document.getElementById("search").style.width = "0";
}


    