const btn = document.querySelector("body > header > form > button");
const email = document.querySelector('#emailInput');
const password = document.querySelector('#passwordInput');



btn.addEventListener('click',function() {
    if(email.value=='tryber@teste.com' && password.value=='123456'){
        alert('Olá, Tryber!');
    }else{
        alert('Email ou senha inválidos');
    }
})

    
