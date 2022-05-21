//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
  var headerH = $("header").outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH) {
    //headerの高さ以上になったら
    $(".header-inner").addClass("fixed"); //fixedというクラス名を付与
  } else {
    //それ以外は
    $(".header-inner").removeClass("fixed"); //fixedというクラス名を除去
  }
}

//testimonialのスライドショー
function TestSlider() {
  $(".testimonial-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
  });
}

//ロゴのスライドショー
function LogoSlider() {
  $(".slider").slick({
    infinite: true, //スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 5, //スライドを画面に5枚見せる
    slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
    autoplay: true,
    dots: false,
    arrows: false,
  });
}
