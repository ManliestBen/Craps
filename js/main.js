/*-------Constants-------*/
const sideObj = {
    any7: {multiplier:4, currentBet:0, winnerIf:7},
    hard4: {multiplier:7, currentBet:0, winnerIf:4},
    hard10: {multiplier:7, currentBet:0, winnerIf:10},
    hard6: {multiplier:9, currentBet:0, winnerIf:6},
    hard8: {multiplier:9, currentBet:0, winnerIf:8},
    any3: {multiplier:15, currentBet:0, winnerIf:3},
    any11: {multiplier:15, currentBet:0, winnerIf:11},
    any2: {multiplier:30, currentBet:0, winnerIf:2},
    any12: {multiplier:30, currentBet:0, winnerIf:12},
    anyCraps: {multiplier:7, currentBet:0, winnerIf:2}
}

const centerObj = {

}

const pointObj = {

}


/*-------State Variables-------*/
let chipTotal, betTotal, payout;


/*-------Cached Element References-------*/




/*-------Event Listeners-------*/
document.querySelector('section').addEventListener('click', chipClick);
document.querySelector('main').addEventListener('click', betClick);
document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('rollBtn').addEventListener('click', rollDice);




/*-------Functions-------*/
init();

function reset(){
    init ();
}
function init() {
    
    chipTotal = 500;
    betTotal = 0;
    dimChips();
    render();
}

function chipClick(evt) {
    if (evt.target.className === 'chip' && chipTotal > 0){
        betTotal += parseInt(evt.target.innerText);
        chipTotal -= parseInt(evt.target.innerText);
        console.log(evt.target.innerText);
        render();
    } else if (evt.target.className === 'chip'){
     }
    render();
}


function betClick(evt){
    if (evt.target.className === 'pointRow'){

    } else if (evt.target.className === 'sideBet') {

    } else if (evt.target.className === 'center') {
    
    }
}

function rollDice(){
    console.log('Rolling dice');
}

function render(){
    dimChips();
    document.getElementById('chipDisplay').innerText = '$ ' + chipTotal;
    document.getElementById('betDisplay').innerText = '$ ' + betTotal;

}

function dimChips(){
    document.getElementById('chip1000').style.visibility= ((chipTotal < 1000) ? 'hidden' : 'visible');
    document.getElementById('chip500').style.visibility= ((chipTotal < 500) ? 'hidden' : 'visible');
    document.getElementById('chip100').style.visibility= ((chipTotal < 100) ? 'hidden' : 'visible');
    document.getElementById('chip25').style.visibility= ((chipTotal < 25) ? 'hidden' : 'visible');
    document.getElementById('chip5').style.visibility= ((chipTotal < 5) ? 'hidden' : 'visible');
    document.getElementById('chip1').style.visibility= ((chipTotal < 1) ? 'hidden' : 'visible');
}
