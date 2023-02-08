function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date();
  var hora = data.getHours()
  //msg.innerHTML = "Agora são ${hora} horas"//
  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha.png'
    document.body.style.background = '#eec158';
    // BOM DIA!
  } else if (hora >= 12 && hora < 18) {
    img.src = "fotodatarde.png" 
    document.body.style.background = '#204f6d';
    // BOA TARDE!
  } else {
    img.src = 'fotodanoite.png'
    document.body.style.background = '#0c1719';
    // BOA NOITE!
  }
}