let btn = document.querySelector('button')
let output = document.querySelector('.colorContainer')


btn.addEventListener('click',colorChanger)


function colorChanger(){

   let alphabets = ['A','B','C','D','E','F']
   let char =''
   let num =''
   let hex =''
   let final= '#'

   for(let i=0;i<3;i++){
     let colorIdx = Math.floor(Math.random()*(alphabets.length))
     let numIdx = Math.floor(Math.random()*6)
     char += alphabets[colorIdx]
      num += numIdx
   
   }

   hex = char + num 

   

  for(let i=0;i<hex.length;i++){
   let idx = Math.floor(Math.random()*hex.length)
   final += hex[idx]
  }


   
   output.style.backgroundColor = final;
   output.style.height = '190px'
   output.style.width = '200px'
 

   output.innerText = final
}




   