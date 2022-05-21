$(() => {
  // スクロールを動かしたらメニュー固定
  $(window).scroll(function () {
    FixedAnime();
  });

  //testimonialのスライドショー
  TestSlider();

  //ロゴのスライドショー
  LogoSlider();
});
