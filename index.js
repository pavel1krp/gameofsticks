const zhmi = document.querySelector(".use");

let arr1 = [];
let arr2 = [];

for(i = 0; i< 100; i++){
    arr1.push(Math.floor(Math.random() * (800-95) + 95))
}
for(i = 0; i< 100; i++){
    arr2.push(Math.floor(Math.random() * (88-1) + 1))
}

zhmi.addEventListener('click', zhmy1);

// zhmi.addEventListener('mouseout', zhmy1);
// function zhmy(){  
//     let value = Math.floor(Math.random()*arr2.length)
//     let rand = arr2[value];
//     let rand1 = arr2[value];
//     zhmi.style.left = rand+"vw";
//     zhmi.style.top =  rand1+"vh";
// }

zhmi.addEventListener('mouseover', zhmy1);
function zhmy1(){  
    let value = Math.floor(Math.random()*arr1.length)
    let value2 = Math.floor(Math.random()*arr2.length)
    let rand = arr1[value];
    let rand1 = arr2[value2];
    zhmi.style.left = rand1+"vw";
    zhmi.style.top =  rand+"px";
}

let counter = document.querySelector('.use1');
counter.addEventListener('click', sum);
let num = 0;
function sum(){
    let counter1 =  document.querySelector('.counter');
    num ++;
    counter1.innerHTML = num;
}