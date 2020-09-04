//Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField) //quando clicar no botão

//Executar uma ação
function cloneField(){
  
  //duplicar os campos. Que campos ?
  const newFieldConatiner =  document.querySelector('.schedule-item').cloneNode(true) //node serve para se referir a elementos html

  //limpar os campos 
  const fields = newFieldConatiner.querySelectorAll('input')

  /* maneira não muito adequada de limpar
  fields[0].value =""
  fields[1].value =""
  */

  fields.forEach(function (field){
    //pegar o field do momento
    field.value=""
  })

  //colocar na página:onde?
  document.querySelector('#schedule-items').appendChild(newFieldConatiner)

}