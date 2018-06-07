$(function() {
    
   
    function playSound() {
        var audio = document.getElementById('idgafAudio');
        if (audio.paused) {
            audio.play();
        }else{
            audio.currentTime = 0
        }
    }
    
    $('.js-idgafBtn').on('click', function () {
        playSound();
    });
});
