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

    let onScore = document.querySelectorAll(".onscore-audio")
    let sound = onScore[Math.floor(Math.random() * 4)];
    sound.play();
    sound.volume = 0.3;
}


let fullArea = document.querySelector('.stiki');
// fullArea.addEventListener('click', sum1);

fullArea.onclick = sum1;                //<-------
async function sum1(){
    fullArea.onclick = null;            //<-------

    let onMiss = document.querySelectorAll(".onmiss-audio")
    let sound = onMiss[Math.floor(Math.random() * 20)];     //<------- Чтобы звук можно было убавить
    sound.play();               //<-------
    sound.volume = 0.3;         //<-------

    setTimeout(function(){      //<------- ЗАПРЕЩАЮ ТЕБЕ КЛИКАТЬ
        // sound.play();
        fullArea.onclick = sum1;        //<-------
    }, 4000);           //<-------
    
    // await sleep(4000);
}


// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// sum1();