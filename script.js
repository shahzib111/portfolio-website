// Email contact form updater
$(document).ready(function () {
    var $sendEmailEl = $('#send-email');
    var $subjectEl   = $('#subject');
    var $bodyEl      = $('#body');

    function updateEmailLink() {
        $sendEmailEl.attr('href',
            'mailto:shahzib111@gmail.com?subject=' +
            encodeURIComponent($subjectEl.val()) +
            '&body=' + encodeURIComponent($bodyEl.val())
        );
    }

    $('#subject, #body').on('input', updateEmailLink);
    updateEmailLink();
});

// Live clock for contact page
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = checkTime(today.getMinutes());
    var s = checkTime(today.getSeconds());
    var el = document.getElementById('txt');
    if (el) el.innerHTML = h + ':' + m + ':' + s;
    setTimeout(startTime, 500);
}

function checkTime(i) {
    return i < 10 ? '0' + i : i;
}
