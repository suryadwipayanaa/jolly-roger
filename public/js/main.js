$('.btnPromo').on('click',function() {
    swal({
        title: "Maintanance",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Keep Patient Okey", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
})

$('.btnBlog').on('click',function(){
  swal({
    title: "Comment Sended!",
    text: "Success sended a comment",
    icon: "success",
    button: "OK",
  });
})

$('.message').on('click', function(){
  swal({
    title: "Email Sended!",
    text: "Success sended an email",
    icon: "success",
    button: "OK",
  });
})


$(window).scroll(function(){
  const scroll = $(this).scrollTop()

  if(scroll > $('.visit').offset().top -20){
      $('nav').addClass('jos')
  } else {
      $('nav').removeClass('jos')
  }

}) 

