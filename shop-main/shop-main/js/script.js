$(function () {
  // var nav_pos = $("header").offset().top;
  // var nav_height = $("header").outerHeight();
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > nav_pos) {
  //     $("body").css("padding-top", nav_height);
  //     $("header").addClass("fixed");
  //   } else {
  //     $("body").css("padding-top", 0);
  //     $("header").removeClass("fixed");
  //   }
  // });

  $("#hamburger-logo").click(function () {
    //   console.log('クリックされました');
    // })
    if ($(".page-menu").css("display") == "none") {
      //page-menuが非表示の場合
      $(".page-menu").fadeIn();
    } else {
      //page-menuが表示中の場合
      $(".page-menu").fadeOut();
    }
  });

  $('a[href^="#"]').click(function () {
    //スクロールのスピード
    var speed = 400;
    //リンク元を取得
    var href = $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? "html" : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  $(".visual").slick({
    autoplay: true,
    dots: true,
    fade: true,
    autoplaySpeed: 2700,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".autoplay").slick({
    slidesToShow: 9,
    slidesToScroll: 9,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });

  $(".autoplay2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
  //
  // $('.slider').slick({
  //   autoplay: true,         //自動再生
  //   autoplaySpeed: 2000,　  //自動再生のスピード
  //   speed: 800,		　 //スライドするスピード
  //   dots: true,　　　　　　//スライドしたのドット
  //   arrows: true,          //左右の矢印
  //   infinite: true,　　　　//スライドのループ
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   pauseOnHover: true   //ホバーしたときにスライドを一時停止しない
  // });

  // $(window).on('load', function(){
  //   $('.slider').bxSlider({
  //     slidesToShow: 3,
  //     slidesToScroll: 3
  //   });
  // });
});
