function validarEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');
    
    if(!email.checkValidity()){
      error.innerHTML = "E-mail inválido";  
    }

  }
  
  function sumirMensagem(){
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "E-mail inválido"){
      error.innerHTML = "";
    }
  }