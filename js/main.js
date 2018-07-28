/*********** 初期表示 ***********/
/**** ふわっと表示 ****/
$('head').append(
  '<style>body{display:none;}'
);
  $(window).on("load", function() {
  $('body').fadeIn("slow");
});

/**** ページトップのスライダー設定 ****/
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

/****************** クリックイベント **********************/
/**** ナビバー ****/
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^="#"]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      //固定ヘッダーの高さ
      var headerHeight = 170;
      // 移動先を数値で取得
      var position = target.offset().top - headerHeight;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

/**** 送信フォーム ****/
//確認アラート
$(function() {
  $('input[name=submit]').click(function() {
    //フォーム内の値取得
    var name = $('input[name=name]').val();
    var twitter = $('input[name=twitter]').val();
    var freeSpase = $('textarea[name=free-spase]').val();

    //入力チェック
    if(name == "" || freeSpase == "" || freeSpase === undefined) {
      //戻る
      alert("入力されていない必須項目があります");
      return false;
    }

    //確認メッセージ作成
    var msg = "以下の内容で送信します" +
                "\nname : " + name +
                "\nTwitter Name : " + twitter +
                "\nFree Space : " + freeSpase;


    //確認ポップアップ
    if(confirm(msg)) {
      //ajax処理(タイムアウト設定する)
      alert("送信が完了しました");
    } else {
      return false;
    }
  });
});
