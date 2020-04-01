
// Slider
$(".slider-block").slick(  {
   dots:true,
   dotsClass:'slick-dots',
   arrows:true,
   autoplay:true,
   autoplaySpeed:2000,
   adaptiveHeight: true,
   pauseOnDotsHover:true,
   // centerMode: true,
   // centerPadding: '60px',
   // slidesToShow: 1,
   responsive: [
     {
         breakpoint: 800,
         settings: {
           arrows:false,
           centerMode:true,
           centerPadding:'20px',
           slidesToShow:1,
         }
       },
       {
         breakpoint: 500,
         settings: {
           arrows:false,
           centerMode:true,
           centerPadding:'20px',
           slidesToShow:1,
         }
       }
     ]
})

//SLIDER WORK TEAM

$(".slider-lazy-block").slick( {
  dots:false,
  autoplay:true,
  autoplaySpeed:2000,
  // speed: 300,
  slidesToShow:4,
  slidesToScroll:4,
  arrows:true,
  nextArrow: document.querySelectorAll('.butt-arrow2'),
  prevArrow: document.querySelectorAll('.butt-arrow'),
  zindex:10,

  responsive: [
    {
      breakpoint:1024,
      settings:{
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint:800,
      settings:{
        slidesToShow:2,
        slidesToScroll:2,
        dots:true,
        arrows:false,
      }
    },
    {
      breakpoint:500,
      settings:{
        slidesToShow:1,
        slidesToScroll:1,
        dots:true,
        arrows:false,
        autoplaySpeed:5000,
        centerMode:true,
        centerPadding:'20px',
      }
    }
  ]
});
