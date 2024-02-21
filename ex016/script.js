var inicio = window.document.getElementById('inicio')
var fim = window.document.getElementById('fim')
var passo = window.document.getElementById('passo')
var res = window.document.getElementById('res')



function contar(){
    var inc = Number(inicio.value)
    var fm = Number(fim.value)
    var ps = Number(passo.value)

    if(!inc.value || !fm.value ||!ps.value){
        window.alert('Impossivel contar')
    
    }
   
    res.innerHTML = 'Contando: '
    for(var c=inc; c<=fm;c+=ps){
        
        res.innerHTML += c+' &#128517;' 
      
    }
    
    res.innerHTML += '&#x1F3C1;'
}

