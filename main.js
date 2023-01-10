let arrowDown = document.querySelectorAll('.question img');
let solves = document.querySelectorAll('.question p');
let asks = document.querySelectorAll('.question span');
let arrowUp = document.querySelectorAll('.question i');

arrowDown.forEach((arrow , index)=>{
    arrow.addEventListener('click',()=>{
        arrow.classList.toggle('toggleArrow')
    solves.forEach(solve=>{
        solves[index].classList.toggle('toggle')
        asks.forEach(ask=>{
            asks[index].classList.toggle('toggleAsk')
            

        })
    })
    })
})
