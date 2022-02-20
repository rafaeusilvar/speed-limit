function calcular() {
  var txtv = document.querySelector('input#txtvel')
  var res = document.querySelector('div#res') 
  var vel = Number(txtv.value)
  res.innerHTML = `<p>Velocidade atingida: <strong>${vel}KM/h</strong></p>`
  if (vel <= 60) {
    res.innerHTML += `<p> Você não foi multado. Limite de velocidade estabelecida na via é de: <strong>60 Km/h</strong> `
      // res.innerHTML += `<p>Você foi <strong>multado</strong> por excesso de velocidade</p>`
  } else if (vel > 60){
    res.innerHTML += `<p>Você foi <strong>multado</strong> por excesso de velocidade.</p>`
  }
  res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}