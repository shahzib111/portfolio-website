// function replace( hide, show ) {
// 	alert("your message has been sent");
//   document.getElementById(hide).style.display="none";
//   document.getElementById(show).style.display="block";
// }

function loadDoc(link) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

$(document).ready(function() {
    //Save references to elements. Don't do DOM walks in event handlers when not needed.
    var $sendEmailEl = $('#send-email');
    var $subjectEl = $('#subject');
    var $bodyEl = $('#body');
    function updateEmailLink() {
        $sendEmailEl.attr('href', 'mailto:shahzib111@gmail.com?subject=' +
            '' + encodeURIComponent($subjectEl.val()) +
            '&body=' + encodeURIComponent($bodyEl.val()));
        //console.log($sendEmailEl.attr('href'));
    }
    $('#subject,#body').on('input', updateEmailLink);
    updateEmailLink();
});

var justHidden = false;

$(document).ready(function() {
    var j;
    $(document).mousemove(function() {
        if (!justHidden) {
            justHidden = false;
            clearTimeout(j);
            $('.btn-ctr').removeClass('hidden');
            j = setTimeout('hide();', 1000);
        }
    });
});

function hide() {
    $('.btn-ctr').addClass('hidden');
}
