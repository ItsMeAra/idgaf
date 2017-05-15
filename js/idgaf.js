$(function() {
    var idgafBtn = $('a.idgafBtn');

    idgafBtn.on('click', function ( event ) {
        event.preventDefault();
        document.getElementById('idgafAudio').play();
    });
});
