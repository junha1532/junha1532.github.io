/* attach a submit handler to the form */
$('#gform').submit(function (event) {
  /* stop form from submitting normally */
  event.preventDefault();

  /* get the action attribute from the <form action=""> element */
  var $form = $(this),
    url =
      'https://script.google.com/macros/s/AKfycbzSUwYr9hmjAQkD8h_TE24-CyRdKOwtErON83oyM3Bc7x5LYGw/exec';

  var posting = $.post(
    url,
    {
      name: $('#name').val(),
      email: $('#email').val(),
      message: $('#message').val(),
    },
    $('#gform').each(function () {
      this.reset();
    })
  );

  /* Alerts the results */
  posting.done(function (data) {
    $('#submit-status').text('Success');
    $('#submit-status').addClass('success');
    setTimeout(function () {
      $('#submit-status').removeClass('success');
      $('#submit-status').text('');
    }, 4000);
  });
});

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
