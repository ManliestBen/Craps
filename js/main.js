/*-------State Variables-------*/
let chipTotal, betTotal, point, die1Num, die1Text, die2Num, die2Text;
let payout = 0;


/*-------Constants-------*/
const sideObj = {
    anySeven: {multiplier:4, currentBet:0, winnerIf:7, dieSpecific: 0},
    hardFour: {multiplier:7, currentBet:0, winnerIf:4, dieSpecific: 1},
    hardTen: {multiplier:7, currentBet:0, winnerIf:10, dieSpecific: 1},
    hardSix: {multiplier:9, currentBet:0, winnerIf:6, dieSpecific: 1},
    hardEight: {multiplier:9, currentBet:0, winnerIf:8, dieSpecific: 1},
    anyThree: {multiplier:15, currentBet:0, winnerIf:3, dieSpecific: 0},
    anyEleven: {multiplier:15, currentBet:0, winnerIf:11, dieSpecific: 0},
    anyTwo: {multiplier:30, currentBet:0, winnerIf:2, dieSpecific: 0},
    anyTwelve: {multiplier:30, currentBet:0, winnerIf:12, dieSpecific: 0},
    anyCraps: {multiplier:7, currentBet:0, winnerIf:2/3/12, dieSpecific: 0}
}

const centerObj = {
    passLine: {multiplier:1, currentBet:0, winnerIf:1, isPointActive:0},
    dontPass: {multiplier:1, currentBet:0, winnerIf:1, isPointActive:0},
    fieldBottom: {multiplier:1, currentBet:0, winnerIf:1, isPointActive:0},
    come: {multiplier:1, currentBet:0, winnerIf:1, isPointActive:0}
}

const pointObj = {
    dontCome: {multiplier:1, currentBet:0, winnerIf:1},
    point4: {multiplier:(9/5), currentBet:0, winnerIf:4},
    point5: {multiplier:(7/5), currentBet:0, winnerIf:5},
    point6: {multiplier:(7/6), currentBet:0, winnerIf:6},
    point8: {multiplier:(7/6), currentBet:0, winnerIf:8},
    point9: {multiplier:(7/5), currentBet:0, winnerIf:9},
    point10: {multiplier:(9/5), currentBet:0, winnerIf:10}
}



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
    
    chipTotal = 1500;
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
        for (type in pointObj){
            if (type === evt.target.id) {
                console.log(evt.target.id);
                pointObj[type].currentBet = betTotal;
                betTotal = 0;
                render();
            };
        }
    } else if (evt.target.className === 'sideBet') {
        for (type in sideObj){
            if (type === evt.target.id) {
                console.log(evt.target.id);
                sideObj[type].currentBet = betTotal;
                betTotal = 0;
                render();
            };
        }
    } else if (evt.target.className === 'center') {
        for (type in centerObj){
            if (type === evt.target.id) {
                console.log(evt.target.id);
                centerObj[type].currentBet = betTotal;
                betTotal = 0;
                render();
            };
        }
    }
}

function rollDice(){
    die1Num = Math.floor(Math.random()*6) + 1;
    die2Num =  Math.floor(Math.random()*6) + 1;
    die1Text = "&#x268" + (die1Num - 1) + " ";
    die2Text = "&#x268" + (die2Num - 1) + " ";
    document.getElementById('rolledDice').innerHTML = die1Text + die2Text;
    payBets();
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

function payBets(){
    for (bet in pointObj){
        if (pointObj[bet].currentBet > 0 && ((die1Num + die2Num) === pointObj[bet].winnerIf)) {
            payout = payout + parseInt(pointObj[bet].multiplier * pointObj[bet].currentBet);
        };
    }
    for (bet in sideObj){
        if (sideObj[bet].currentBet > 0 && (sideObj[bet].winnerIf === (die1Num + die2Num)) && sideObj[bet].dieSpecific === 0) {
            payout = payout + parseInt(sideObj[bet].multiplier * sideObj[bet].currentBet);
        };
    }
    for (bet in sideObj){
        if (sideObj[bet].currentBet > 0 && (sideObj[bet].winnerIf === (die1Num + die2Num)) && (die1Num === die2Num) && sideObj[bet].dieSpecific === 1) {
            payout = payout + parseInt(sideObj[bet].multiplier * sideObj[bet].currentBet);
        };
    }
    chipTotal += payout;
    payout = 0;
    render();
}