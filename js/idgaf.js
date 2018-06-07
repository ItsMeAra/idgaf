$(function() {
    var audio = document.getElementById('idgafBtn');
   
    function play() {
        if (audio.paused) {
            audio.play();
        }else{
            audio.currentTime = 0
        }
    }
    
    idgafBtn.on('click', function () {
        play();
    });
});
