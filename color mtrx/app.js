
//global---------------------------------------
let btn = document.querySelector('button');
let parent = document.querySelector('.parent')
let letters = ['A','B','C','D','E','F']
add()


//event  listeners------------------------------------------------

parent.addEventListener('click',(e)=>{
   if(e.target.classList.contains('child'))
    colorChange(e)
})

btn.addEventListener('click',change)



// Functions ----------------------------------------------------


function change(){
   remove()
   add()

}



function remove(){

  let rm = document.querySelectorAll('.child')
  for(let div of rm){
   div.remove()
  }

}


function add(){

   for(let i=0;i<12;i++){
      let child = document.createElement('div');
      let hex =''
      let finalHex= '#'

         for(let j=0;j<3;j++){

            let charIdx = Math.floor(Math.random()*letters.length)
            let num = Math.floor(Math.random()*6)
            hex += letters[charIdx] + num
         }
      
         for(let k=0;k<6;k++){
            let finalIdx = Math.floor(Math.random()*hex.length)
            finalHex += hex[finalIdx];
         }
         parent.append(child);
         child.classList.add('child')
         child.style.backgroundColor = finalHex
         child.innerText = finalHex
   }

}




function colorChange(e){
   let hex =''
   let finalHex= '#'

      for(let j=0;j<3;j++){

         let charIdx = Math.floor(Math.random()*letters.length)
         let num = Math.floor(Math.random()*6)
         hex += letters[charIdx] + num
      }
     
      for(let k=0;k<6;k++){
         let finalIdx = Math.floor(Math.random()*hex.length)
         finalHex += hex[finalIdx];
      }

      e.target.style.backgroundColor= finalHex
      e.target.innerText=finalHex
}






