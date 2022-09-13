const input = document.querySelector('input')
const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
const email = document.querySelector('#email')
const numero = document.querySelector('#numero')
const senha1 = document.querySelector('#senha1')
const senha2 = document.querySelector('#senha2')
const login = document.querySelector('#login')

login.addEventListener('click', (event) => {
event.preventDefault() 

const inputnome = nome.value 
const inputsobrenome = sobrenome.value
const inputemail = email.value
const inputnumero = numero.value
const inputsenha1 = senha1.value
const inputsenha2 = senha2.value




 if(inputnome === "" || inputsobrenome === "" || inputemail === "" || inputnumero === "" || inputsenha1 === "" || inputsenha2 === "") {


nome.style.border= '1px solid  red'
sobrenome.style.border= '1px solid  red'
email.style.border= '1px solid  red'
numero.style.border= '1px solid  red'
senha1.style.border= '1px solid  red'
senha2.style.border= '1px solid  red'

setTimeout(()=> {
nome.style.border= '1px solid  rgb(29, 27, 27)'
sobrenome.style.border= '1px solid  rgb(29, 27, 27)'
email.style.border= '1px solid  rgb(29, 27, 27)'
numero.style.border= '1px solid  rgb(29, 27, 27)'
senha1.style.border= '1px solid  rgb(29, 27, 27)'
senha2.style.border= '1px solid  rgb(29, 27, 27)'
},3000)
return;
 }
})

