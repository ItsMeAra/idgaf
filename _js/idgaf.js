$(function() {
    var idgafBtn = $('a.idgafBtn');

    $(document).on('click', '.idgafBtn', function ( event ) {
        event.preventDefault();
        document.getElementById('idgafAudio').play();
    });
});