// �����̂��������̋N�_�ƂȂ�A�j���[�V�����̖��O���`
function fadeAnime() {

    // �t�F�[�h
    $('.profile-area').each(function () { //fadeUpTrigger�Ƃ����N���X����
        var elemPos = $(this).offset().top - 50;//�v�f���A50px���
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('CssfadeUp');// ��ʓ��ɓ�������CssfadeUp�Ƃ����N���X����ǋL
        }
    });

    // �t�F�[�h
    $('.skill-list').each(function () { //fadeUpTrigger�Ƃ����N���X����
        var elemPos = $(this).offset().top - 50;//�v�f���A50px���
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('CssfadeUp');// ��ʓ��ɓ�������CssfadeUp�Ƃ����N���X����ǋL
        }
    });

    // �t�F�[�h
    $('.certification-list').each(function () { //fadeUpTrigger�Ƃ����N���X����
        var elemPos = $(this).offset().top - 50;//�v�f���A50px���
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('CssfadeUp');// ��ʓ��ɓ�������CssfadeUp�Ƃ����N���X����ǋL
        }
    });
}

// ��ʂ��X�N���[���������瓮���������ꍇ�̋L�q
$(window).scroll(function () {
    fadeAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
});// �����܂ŉ�ʂ��X�N���[���������瓮���������ꍇ�̋L�q

// ��ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q
$(window).on('load', function () {
    fadeAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
});// �����܂ŉ�ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q

