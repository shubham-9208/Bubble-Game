let bubble_on_page = () => {  // multiple bubble on html page
    let element = "";
    for (let index = 0; index <= 175; index++) {
        let num = Math.floor(Math.random() * 10 +1)
        element += `<div class="btn">${num}</div>`;

    }

    let bubblebtn = document.querySelector('.down-panel').innerHTML = element;
}
bubble_on_page();

let gameover;
let timerset =30;
let time=()=>{  /// timer count down
    let time1=setInterval(()=>{
        if(timerset >0){
            timerset--;
        document.querySelector('.timeout').textContent=timerset
        }else{
            clearInterval(time1);
            gameover=document.querySelector('.down-panel').innerHTML=`<div>
               Game Over <p>Score ${score}</p>
               <button id="start">Start new game</button>
            </div>`;
            document.querySelector('#start').addEventListener('click', (e) => {
                location.reload() 
                })
            
        }
        
    },1000)
}
time();

let hitrandom;
let hitnum=()=>{
    hitrandom=Math.floor((Math.random())*10 +1)  
    document.querySelector('#hit').textContent=hitrandom;
}
hitnum()

let score=0;
let scoreincrease=()=>{ // for score increasing
    score += 10;
    document.querySelector('#score').textContent=score;
}

document.querySelector('.down-panel').addEventListener('click',(e)=>{
    let checknum1 =(Number(e.target.textContent))
    if(checknum1 === hitrandom){
        scoreincrease()
        hitnum()
        bubble_on_page()
    }
    
    
})


    
    





