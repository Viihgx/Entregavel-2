
    $(document).ready(function() {
  $('#contact-form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    $.ajax({
      url: 'enviar-email.php',
      type: 'POST',
      data: {name: name, email: email, message: message},
      success: function(response) {
        alert('Mensagem enviada com sucesso!');
      },
      error: function(response) {
        alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
      }
    });
  });
});
 