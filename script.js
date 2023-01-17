'use stict'
const btn_login =  document.querySelector('.btn-login')
const conteiner = document.querySelector('.main-conteiner')
const access = document.querySelector('.access')

btn_login.addEventListener('click',function(){
    //Get user and passaword from the html
    const user = document.querySelector('.user').value
    const password = document.querySelector('.password').value
    //checking if there's any spacial caracter.
    const regex = /^[^a-zA-Z0-9]+$/g

    const checkUser = user.match(regex) ? true : false

    //checking how many caracter there is on it
    let count = 0
    for(let i = 0;i < password.length;i++){
        count++
    }

    //Get acess to the system if passaword contains 8 to 12 caracters
    const checkHowManyChar = count >= 8 && count <= 12

    //if everything is match the use is gonna get access to the system itself
    if(checkUser && checkHowManyChar){
        access.style.display = 'block'
        conteiner.style.display = 'none'
    }
    
   
    
})

