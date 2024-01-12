let btn= document.querySelector('button')
let num = document.querySelector('div')


btn.addEventListener('click',()=>{
   let randomNum = Math.floor(Math.random()*(11-1))
    
   num.innerText = randomNum
})



