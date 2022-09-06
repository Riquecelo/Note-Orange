
let usuario = document.querySelector('#usuario');
let senha = document.querySelector('#senha')

let btnEntrar = document.querySelector('.btn_login');
btnEntrar.addEventListener('click', function(e){
    e.preventDefault();
    let user = 'admin';
    let password = 'admin';
    if(user == usuario.value && password == senha.value){
        alert('ENTRANDO NA CONTA DO USUÁRIO')
        location.href='principal.html'
    }else{
        alert('Usuario ou senha invalidos')
    }
    
})