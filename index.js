const unRead=document.querySelectorAll(".active");
const markAll=document.querySelector('#all-read');
const number=document.querySelector('.control-heading__num');
// const circles=document.querySelector('.circle');
number.innerHTML=unRead.length;

unRead.forEach((message)=>{
    message.addEventListener('click', ()=>{
        message.classList.remove('active');
        
        const unReadMessages=document.querySelectorAll('.active');
        number.innerHTML=unReadMessages.length;
    })
    
})
markAll.addEventListener('click', ()=>{
    unRead.forEach((message)=> {message.classList.remove('active');
    
    
})
        const unReadMessages=document.querySelectorAll('.active');
        number.innerHTML=unReadMessages.length;
    
})

