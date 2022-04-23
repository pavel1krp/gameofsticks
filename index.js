const zhmi = document.querySelector(".use");
const counter =  document.querySelector('.counter');
const score = document.querySelector('.use1');
const modal = document.querySelector('.modal');


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
    zhmi.style.right = "unset";
}

//-----/ Попадание



score.addEventListener('click', sum);

let num = 0;

function sum(){

    zhmy1()

    score.removeEventListener('click', sum);
    score.removeEventListener('click', zhmy1);
    
    addOne();

    num ++;
    counter.innerHTML = num;

    let onScore = document.querySelectorAll(".onscore-audio")
    let sound = onScore[Math.floor(Math.random() * 4)];

    sound.volume = 0.3;
    sound.play();
    
    if (counter.innerHTML == 20){

       openModal();
    }

    setTimeout(function(){   
        score.addEventListener('click', sum);
        score.addEventListener('click', zhmy1); 

    }, 1000); 
}

//-----/ Модалочка

function openModal(){
    const closeBtn = document.querySelectorAll('.modal__button')
    const modalShadow = document.querySelector('.modal-shadow');
    const modalWrapper = document.querySelector('.modal-wrapper');

    zhmi.style.zIndex = "0";
    counter.style.zIndex = "0";
    modalShadow.style.opacity = "1";
    // modalShadow.style.zIndex = "2";
    modalWrapper.style.opacity = "1";
    modalWrapper.style.zIndex = "2";
    modal.style.transform = "translateY(0)";

    closeBtn[0].addEventListener('click', ()=>{
        zhmi.style.zIndex = "1";
        counter.style.zIndex = "1";
        modalShadow.style.opacity = "0";
        modalWrapper.style.opacity = "0";
        modalWrapper.style.zIndex = "0";
        // modalShadow.style.zIndex = "0";
        modal.style.transform = "translateY(80vh)";
        num = 0;
        counter.innerHTML = num;
    })
    modalShadow.addEventListener('click', ()=>{
        zhmi.style.zIndex = "1";
        counter.style.zIndex = "1";
        modalShadow.style.opacity = "0";
        // modalShadow.style.zIndex = "0";
        modalWrapper.style.opacity = "0";
        modalWrapper.style.zIndex = "0";
        modal.style.transform = "translateY(80vh)";
        num = 0;
        counter.innerHTML = num;
    })

}

// function close(){
  
// }
//=====/ Промах

let fullArea = document.querySelector('.stiki');

fullArea.onclick = sum1;                
async function sum1(){
    fullArea.onclick = null;          

    let onMiss = document.querySelectorAll(".onmiss-audio")
    let sound = onMiss[Math.floor(Math.random() * 20)];     
    sound.play();               
    sound.volume = 0.3;         

    setTimeout(function(){   

        fullArea.onclick = sum1;    

    }, 4000);           
}

//-----/ Плюс один анимация
function addOne(){
    const plusOne = document.createElement('div');
    plusOne.classList.add('plus-one')
    zhmi.appendChild(plusOne);
    plusOne.innerHTML = "+1";
    plusOne.style.opacity = "1";
    plusOne.style.transform = "translate(55px,-70px)";

    setTimeout(()=>{
        plusOne.style.transform = "translate(55px,-120px)";
        
    }, 10)
    setTimeout(()=>{
        
    }, 500)
    setTimeout(()=>{
        plusOne.remove()

    }, 800)

}