
var email = window.document.getElementById('email')
var senha = window.document.getElementById('senha')
var res = window.document.getElementById('res')

var dados = []

function login(){

    
    var E = email.value
    var P = senha.value
    
    if(E== "" || P == ""){
        alert("Preencha todos os campos")

    }
    else if(dados.includes(E)){
        alert('Email Existente')
    }else{
        res.innerHTML = `email ${E} Cadastrado`
        dados.push(E)

    }
}
   

