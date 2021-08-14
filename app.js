const textview = document.querySelector('.textview')
 const form  = document.querySelector('.form')
  const  backspace = document.querySelector('.backspace')


function insert(num){
     textview.value = textview.value +num
}
function euqal(){ 
      var amit  = textview.value 
 if(amit){
      textview.value = eval(amit)
 }
}



backspace.addEventListener('click', ()=>{


 
     // document.querySelector('.textview').value = textview.slice(0,textview.length -1);
})


