var hora = window.document.getElementById('hora')
var foto = window.document.getElementById('foto')
var agora = new Date()
agora.getHours()





if(agora <=14){
 hora.innerHTML = ('Hora do dia são'+ agora)
foto.innerHTML = Image(@fotonascerdosol.jpg)

}else {
    hora.innerHTML = ('Hora do dia são'+ agora)
    foto.innerHTML = Image(@fotonascerdosol.jpg)

}