var nmr = window.document.getElementById('nmr')
var listatabuada = window.document.getElementById('listatabuada')

function gerir(){

var n1 = Number(nmr.value)

listatabuada.innerHTML=''
for(var j=1; j<=10; j++){

var item = document.createElement('option')
item.text =`${n1}x${j}=${n1*j}`
listatabuada.appendChild(item)

}
}