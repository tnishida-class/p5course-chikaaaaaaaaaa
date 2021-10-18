// 練習問題：神戸市のマーク
function setup(){
  createCanvas(200, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  // 中身塗り潰さず円周の線だけでいくよ〜
  strokeWeight(25);
  // 線の太さこんくらいでいくよ〜
  strokeCap(SQUARE);
  //　線の先っちょは四角でいくよ〜
  //（ROUND→丸！PROJECT→なんか伸びて四角になる！の３種！大文字指定！！）
  // 「こんな図形かいてね」より「この太さとタッチ？のペン持ってね」って指示が先！
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(50 + 25, 100, 100, 100, QUARTER_PI + PI, QUARTER_PI );
  // arc=弧をかく関数←難しいので、p5.jsのReferenceを見てみる！！
  // arc(横軸, 縦軸, 円の横幅, 円の縦幅, 円の始まりの位置, 円の終わりの位置)
  // 円の始まりの位置＝X軸の正のところから半時計周り！！
  // PI=円の半径・TWO_PI=円1周分・HALF_PI=円の4分の1・QUARTER_PI=円の8分の1！

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  //神大のロゴ作るなら、キャンバスを横長にして、右側に作ると良い（400,200)とか！
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
}
