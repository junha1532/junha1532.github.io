var chatBarOpen = 0;

function show() {
  document.getElementById('chat-bar').style.visibility = 'visible';
  document.getElementById('chat-bar').style.opacity = '1';
  return (chatBarOpen = 1);
}

function show_close() {
  if (chatBarOpen == 0) {
    document.getElementById('chat-bar').style.visibility = 'visible';
    document.getElementById('chat-bar').style.opacity = '1';
    return (chatBarOpen = 1);
  }
  if (chatBarOpen == 1) {
    document.getElementById('chat-bar').style.visibility = 'hidden';
    document.getElementById('chat-bar').style.opacity = '0';
    return (chatBarOpen = 0);
  }
}

var $form = $('form#gform'),
  url =
    'https://script.google.com/macros/s/AKfycbzSUwYr9hmjAQkD8h_TE24-CyRdKOwtErON83oyM3Bc7x5LYGw/exec';

$('#submit-form').on('click', function (e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: 'POST',
    dataType: 'json',
    data: $form.serializeObject(),
  }).success;
  // do something
  $('#submit-status').toggleClass('success');
});
