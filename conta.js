
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const senha1 = document.querySelector('#senha1')
const login = document.querySelector('#login')

login.addEventListener('click', (event) => {
event.preventDefault() 

const inputnome = nome.value 
const inputemail = email.value
const inputsenha1 = senha1.value




 if(inputnome === "" || inputemail === ""  || inputsenha1 === "" ) {


nome.style.border= '1px solid  red'
email.style.border= '1px solid  red'
senha1.style.border= '1px solid  red'


setTimeout(()=> {
nome.style.border= '1px solid  rgb(29, 27, 27)'
email.style.border= '1px solid  rgb(29, 27, 27)'
senha1.style.border= '1px solid  rgb(29, 27, 27)'

},3000)
return;
 }
})

