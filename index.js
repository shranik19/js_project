let count=0;

//set value and buttons
const value= document.querySelector("#num");
const btns=document.querySelectorAll(".buttons");

const decrease=document.querySelector('.dec');
decrease.addEventListener("click",function(){
    count--;
    value.textContent=count;
    value.style.color='red';
})
const reset=document.querySelector('.res');
reset.addEventListener("click",function(){
    count=0;
    value.textContent=count;
    value.style.color='black';
})
const increase=document.querySelector('.inc');
increase.addEventListener("click",function(){
    count++;
    value.textContent=count;
    value.style.color='green';
})