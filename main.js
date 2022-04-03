'use strict';
// イベントハンドラ
function keyUp(e) {
    // console.log('keyUp');
    console.log(inputText.value);// 入力文字列の取得
    console.log(inputText.value.length); //入力文字列の文字数を取得
}

const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', keyUp, false);