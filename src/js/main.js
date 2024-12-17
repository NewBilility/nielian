$(function () {
    $('#audio-img').click(function (e) {
        e.preventDefault();
        var audio = $('#bg-audio').get(0)
        var musicIcon = $('#audio-img').get(0)

        if (audio.paused) {
            audio.play();
            musicIcon.src = "/public/声音开.png"; // 替换为暂停图标图片，需自行准备相应图片
        } else {
            audio.pause();
            musicIcon.src = "/public/声音关.png"; // 换回播放图标图片
        }
    });

    //语言按钮跳转
    $('#lang-btn').click(function (e) {
        e.preventDefault();
        window.location.href = '/page_0.html'
    });
})