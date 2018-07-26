/** 初期表示 */
//ふわっと表示
$('head').append(
  '<style>body{display:none;}'
);
  $(window).on("load", function() {
  $('body').fadeIn("slow");
});
//ページトップのスライダー設定
$(function() {
  $('#slider').slick({
    // スライダー下部に表示される、ドット状のページネーション
    dots: true,
    // 無限ループ
    infinite: true,
    // 自動再生。trueで自動再生される。
    autoplay: true,
    // 自動再生で切り替えをする時間
    autoplaySpeed: 3000,
    // 自動再生や左右の矢印でスライドするスピード
    speed: 400,
    // 自動再生時にスライドのエリアにマウスオンで一時停止するかどうか
    pauseOnHover: true,
    // 切り替えのアニメーション。ease,linear,ease-in,ease-out,ease-in-out
    cssEase: 'ease',
    //両サイドの見えている部分のサイズ
    centerPadding:'0',
    // 表示中の画像を中央へ
    centerMode: true,
    // 左右の次へ、前へボタンを表示するかどうか
    arrows: true,
    //矢印の代わりに肉球に差し替える
    appendArrows: $('#arrows')
  });
});
