// モーダルを表示するボタンを全て取得
const modalButtonList = document.querySelectorAll('.js-modal-button');


for (let i = 0; i < modalButtonList.length; i++) {
    // ボタンのカスタムデータ属性を参照して対象のモーダルを取得
    let modal = document.querySelector('.js-modal-' + modalButtonList[i].dataset.btnid);

    // モーダル表示イベントを追加
    modalButtonList[i].addEventListener('click', () => {
        modal.classList.add('is-open');
    });


    // ボタンのカスタムデータ属性を参照して対象のモーダルを閉じるボタンを取得
    let modalClose = document.querySelector('.js-close-button-' + modalButtonList[i].dataset.btnid);

    // モーダル非表示イベントを追加
    modalClose.addEventListener('click', () => {
        // 表示用のクラスを削除
        modal.classList.remove('is-open');
    });
}