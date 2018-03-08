$(function(){

// ページトップ フェードインアウト＆スムーススクロール
    var $scroll  = 100; // ページトップアイコン表示開始位置
    var $speed   = 300; // スクロール速度
    var $pagetop = $('#pagetop');

    // フェードインアウト
    $(window).on('scroll', function () {
        if($(this).scrollTop() > $scroll) {
            $pagetop.fadeIn();
            return false;
        }
        else {
            $pagetop.fadeOut();
            return false;
        }
    });

    // スムーススクロール
    $pagetop.on('click',function(){
        $('html,body').animate({
            scrollTop: 0
        }, $speed);
        return false;
    });

    // ページトップ要素が初期位置に来た時に固定(static,fixedクラスを操作)
    $(window).on('load', function () {
        var $footerOffset = $('.footer').offset().top;
        $(window).on('scroll', function () {
            if($(window).scrollTop() + $(window).height() < $footerOffset) {
                $pagetop.removeClass('static');
                $pagetop.addClass('fixed');
            } else {
                $pagetop.removeClass('fixed');
                $pagetop.addClass('static');
            }
        });
    });

    // ページ内リンクのスムーススクロール
    $('a[href^="#"]').click(function() {
         // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= jQuery(this).attr("href");
      // 移動先を取得
      var target = jQuery(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });


  // var ua = navigator.userAgent;
  // if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
  //   // スマートフォン用コード
  //   $('#video').append('<p>あああああ</p>');
  // } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
  //   // タブレット用コード
  // } else {
  //   // PC用コード
  //   $('#video').append('<iframe width="1000" height="500" src="https://www.youtube.com/embed/mQ0Clc2F-pY?autoplay=1&loop=1&playlist=mQ0Clc2F-pY&rel=0&showinfo=0&controls=0&modestbranding=1&disablekb=1&iv_load_policy=3" frameborder="0"></iframe>');
  // }




});



$(window).on("load resize", function () {
  var windowWidth = parseInt($(window).width());

  // var $video = $('#video');
  // if (windowWidth < 768) {
  //   // if ($video.hasClass('spVideo')) {
  //   if ($video.hasClass('pcVideo')) {
  //     $video.toggleClass('pcVideo', 'spVideo');
  //     $video.append('<p>あああああ</p>');
  //   }
  //   // }
  // } else {
  //   if ($video.hasClass('pcVideo')) {

  //   } else {
  //     // $video.append('<iframe width="1000" height="500" src="https://www.youtube.com/embed/mQ0Clc2F-pY?autoplay=1&loop=1&playlist=mQ0Clc2F-pY&rel=0&showinfo=0&controls=0&modestbranding=1&disablekb=1&iv_load_policy=3" frameborder="0"></iframe>');
  //   }
  // }


});