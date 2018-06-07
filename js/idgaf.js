$(function() {
    var audio = document.getElementById('idgafBtn');
   
    function playSound() {
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
