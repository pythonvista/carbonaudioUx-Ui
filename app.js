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
          slidesToShow: 2.2
        }
      }
    ]
 
});


function openBtn()
{
document.getElementById("leftMenu").style.width = "250px";
           
}
        
function closeBtn()
{
document.getElementById("leftMenu").style.width = "0";
}


    