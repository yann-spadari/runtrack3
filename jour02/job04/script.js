document.addEventListener('DOMContentLoaded', function loaded() {

  var textarea = document.querySelector('#keylogger');

  document.addEventListener('keypress', (event) => {
  
     var listen = textarea.value;
     var key = event.key;
  
      textarea.value = listen + key;
  }

)})


