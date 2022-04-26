$(() => {
  // スクロールを動かしたらメニュー固定
  $(window).scroll(function () {
    FixedAnime();
  });

  //ロゴのスライドショー
  LogoSlider();
});
