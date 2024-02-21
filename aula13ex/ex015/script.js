

var idade = window.document.getElementById('anonasc')
var sexo = window.document.getElementById('sexo')
var sexoF = window.document.getElementById('sexoF')
var sexoM = window.document.getElementById('sexoM')
var img = window.document.getElementById('img')
var msg = window.document.getElementById('msg')
var ano = new Date()
var idd = ano.getFullYear()

var n1
var idadeAtual
var sex
function verif(){

    if(!sexoF.value || !sexoM.value || !idade.value){
        alert('[ERRO]Digite os dados por favor.')
        return;

    }
   n1 = Number(idade.value)
    idadeAtual = idd - n1
    

    if(sexoF.checked){
        msg.innerHTML = `Detectamos uma Mulher com ${idadeAtual} anos.`

        img.src = 'fotomulherteste.png'
        
    }
    if(sexoM.checked)
    {
        msg.innerHTML = `Detectamos um Homem com ${idadeAtual} anos.`

        img.src = 'fotohomem.png'
        
    }



}


  




