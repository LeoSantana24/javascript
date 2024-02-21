let nmr = window.document.getElementById('nmr')
let selec  = window.document.getElementById('selec')
let res = window.document.getElementById('res')

let num = []
let maior = 0
let media = 0
let numC = 0
var t = 0

function Adicionar(){

   

   
    let valor = Number(nmr.value)
  
  if(nmr.value < 1 || nmr.value > 100 ){
    alert("Valor inválido ou já encontrado na lista.")
  }else if(num.includes(valor)){
  
    alert("Valor duplicado!")
 
}
 
else{
  num.push(valor)

 
    var item = document.createElement('option')
    item.text =`Valor ${num[num.length - 1]} adicionado.`
    
    
    selec.appendChild(item)
    
  
}
}
  

  
  function Finalizar(){

    if (selec.length == 0){
        window.alert('[ERRO]Nenhum valor foi adicionado!')

  }
  else{
    
    let soma = 0
   for(let c=0; c<num.length; c++){

        
        soma += num[c]
    }
   media = soma/num.length
   numC = num.length
   
   
    for(let j = 0; j < num.length; j++){
       
        if(maior < num[j]){
            maior = num[j]
            

         }
        }

        let menor = num[0]
        for(let i = 1; i< num.length; i++){
           
            if(menor > num[i]){
                menor = num[i]

         }
       
    }
    
         
    res.innerHTML = `A soma dos valores é ${soma}.<br>`
    res.innerHTML += `O maior valor informado foi ${maior}.<br>`
    res.innerHTML += `O menor valor informado foi ${menor}.<br>`
    res.innerHTML += `A media dos valores é ${media}<br>`
    res.innerHTML += `Ao todos tem ${numC} números cadastrados.`
    
  }
  
  
  
  
    

  }


  
