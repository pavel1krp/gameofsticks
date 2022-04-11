const zhmi = document.querySelector(".use");
let arr2 = [];
for(i = 0; i< 100; i++){
    arr2.push(Math.floor(Math.random() * 90))
}
zhmi.addEventListener('mouseover', zhmy);
zhmi.addEventListener('mouseout', zhmy);
zhmi.addEventListener('mouseover', zhmy1);
zhmi.addEventListener('mouseout', zhmy1);
function zhmy(){  
    let value = Math.floor(Math.random()*arr2.length)
    let rand = arr2[value];
    let rand1 = arr2[value];
    zhmi.style.left = rand+"vw";
    zhmi.style.top =  rand1+"vh";
}
function zhmy1(){  
    let value = Math.floor(Math.random()*arr2.length)
    let rand = arr2[value];
    let rand1 = arr2[value];
    zhmi.style.right = rand+"vw";
    zhmi.style.bottom =  rand1+"vh";
}
let counter = document.querySelector('.use1');
counter.addEventListener('click', sum);
let num = 0;
function sum(){
    let counter1 =  document.querySelector('.counter');
    num ++;
    counter1.innerHTML = num;
}