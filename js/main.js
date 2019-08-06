/*-------State Variables-------*/
let chipTotal, betTotal, point, die1Num, die1Text, die2Num, die2Text;
let payout = 0;
let pointActive = 0;  // 0 means no point is active, otherwise set to the value of point
let newPointActive = 0;

/*-------Constants-------*/
const sideObj = {
    anySeven: {multiplier:4, currentBet:0, winnerIf:7, dieSpecific: 0},
    hardFour: {multiplier:7, currentBet:0, winnerIf:4, dieSpecific: 1},
    hardTen: {multiplier:7, currentBet:0, winnerIf:10, dieSpecific: 1},
    hardSix: {multiplier:9, currentBet:0, winnerIf:6, dieSpecific: 1},
    hardEight: {multiplier:9, currentBet:0, winnerIf:8, dieSpecific: 1},
    anyThree: {multiplier:15, currentBet:0, winnerIf:3, dieSpecific: 0},
    anyEleven: {multiplier:15, currentBet:0, winnerIf:11, dieSpecific: 0},
    anyTwo: {multiplier:30, currentBet:0, winnerIf:2, dieSpecific: 1},
    anyTwelve: {multiplier:30, currentBet:0, winnerIf:12, dieSpecific: 1},
    anyCraps: {multiplier:7, currentBet:0, winnerIf:[2, 3, 12], dieSpecific: 0}
}

const centerObj = {
    passLine: {multiplier:1, currentBet:0, winnerIf:1},
    dontPass: {multiplier:1, currentBet:0, winnerIf:1},
    fieldBottom: {multiplier:1, currentBet:0, winnerIf:[2, 3, 4, 9, 10, 11, 12]},
    come: {multiplier:1, currentBet:0, winnerIf:1}
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
                pointObj[type].currentBet += betTotal;
                betTotal = 0;
                
            };
        }
    } else if (evt.target.className === 'sideBet') {
        for (type in sideObj){
            if (type === evt.target.id) {
                console.log(evt.target.id);
                sideObj[type].currentBet += betTotal;
                betTotal = 0;
                
            };
        }
    } else if (evt.target.className === 'center') {
        for (type in centerObj){
            if (type === evt.target.id) {
                console.log(evt.target.id);
                centerObj[type].currentBet += betTotal;
                betTotal = 0;
                
            };
        }
    }
render()
renderBet()
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
    
    
    
    // console.log("current point" + pointActive);
    // console.log("Pass line bet is" + centerObj.passLine.currentBet);
    
    
    
    // var addBetToList = document.createElement("li");
    // var textNode;
    // if (betTotal > 0) {
    //     textNode = document.createTextNode(`Bet $ ${betTotal} on ${evt.target.id}`);
    //     addBetToList.appendChild(textNode);
    //     document.getElementById("betList").appendChild(addBetToList);
    //     }
}

function renderBet(){

}    
    // for (bet in pointObj){
    //     if (pointObj[bet].currentBet > 0) {
            
    //         var textNode;
    //         textNode = document.createTextNode(`$ ${pointObj[bet].currentBet} bet on ${pointObj[bet].winnerIf}`);
    //         addBetToList.appendChild(textNode);
    //         document.getElementById("betList").appendChild(textNode);
    //         // addBetToList.removeChild(textNode);
    //         console.log("text node" + textNode);
    //         console.log("Bet list console " + addBetToList);
    //     };
        
    // }

function dimChips(){
    document.getElementById('chip1000').style.visibility= ((chipTotal < 1000) ? 'hidden' : 'visible');
    document.getElementById('chip500').style.visibility= ((chipTotal < 500) ? 'hidden' : 'visible');
    document.getElementById('chip100').style.visibility= ((chipTotal < 100) ? 'hidden' : 'visible');
    document.getElementById('chip25').style.visibility= ((chipTotal < 25) ? 'hidden' : 'visible');
    document.getElementById('chip5').style.visibility= ((chipTotal < 5) ? 'hidden' : 'visible');
    document.getElementById('chip1').style.visibility= ((chipTotal < 1) ? 'hidden' : 'visible');
}
function payBets(){
// Conditions for when a point is active
    // newPointActive = 0;
    if (pointActive > 0){
    // Payout if current point is rolled.
    for (bet in pointObj){
        if (((die1Num + die2Num) === pointObj[bet].winnerIf)) {
            payout = payout + parseInt(pointObj[bet].multiplier * pointObj[bet].currentBet);
        }
    }
    // Payout side bet "any craps"
    for (bet in sideObj){
        if ((sideObj[bet].winnerIf === (die1Num + die2Num) || (die1Num + die2Num === 2) || (die1Num + die2Num === 3) || (die1Num + die2Num === 12)) && sideObj[bet].dieSpecific === 0) {
            payout = payout + parseInt(sideObj[bet].multiplier * sideObj[bet].currentBet);
        } 
    }
    // Payout for hard-ways, removing bet if 'soft' number is rolled first.
    for (bet in sideObj){
        if ((sideObj[bet].winnerIf === (die1Num + die2Num)) && (die1Num === die2Num) && sideObj[bet].dieSpecific === 1) {
            payout = payout + parseInt(sideObj[bet].multiplier * sideObj[bet].currentBet);
        } if ((sideObj[bet].winnerIf === (die1Num + die2Num)) && (die1Num !== die2Num)) {
            sideObj[bet].currentBet = 0;
        }
    }
    for (bet in centerObj){
            if ((die1Num +die2Num !== 7)) {
                for (bet in centerObj){
                    // If the point is rolled, payout the pass line, clear the don't pass line, and deactivate the point.
                    if (pointActive === (die1Num + die2Num)){
                        payout = payout + parseInt(centerObj.passLine.multiplier * centerObj.passLine.currentBet);
                        centerObj.dontPass.currentBet = 0;
                        // pointActive = 0;
                    }
                    
                }
            }
            // Clears the board (except the 'any craps' field) if a 7 is rolled while the point is active.
            if ((die1Num + die2Num === 7)){
                for (bet in pointObj){
                    pointObj[bet].currentBet = 0;
                }
                for (bet in sideObj){
                    if (sideObj.anyCraps.currentBet > 0){
                    } else {
                        sideObj[bet].currentBet = 0;
                    }
                }
                // Pays the don't pass line on a roll of 7 while point is active
                for (bet in centerObj){
                    payout = payout + parseInt(centerObj.dontPass.multiplier * centerObj.dontPass.currentBet);
                    centerObj.passLine.currentBet = 0;
                }
            pointActive = 0;
            } 
    }
        
    }

    if (pointActive === 0) {
        if (die1Num + die2Num === 7 || die1Num + die2Num === 11){
            payout = payout + centerObj.passLine.currentBet;
            centerObj.dontPass.currentBet = 0;
            console.log("WINNAH WINNAH, CHICKEN DINNAH!!!")
        }
        if (die1Num + die2Num === 2 || die1Num + die2Num === 3 || die1Num + die2Num === 12){
            payout = payout + centerObj.dontPass.currentBet;
            centerObj.passLine.currentBet = 0;
            console.log("CRAPPY CRAP CRAPS!!!");
        }
        // if (die1Num + die2Num === 4 || die1Num + die2Num === 5 || die1Num + die2Num === 6 || die1Num + die2Num === 8 || die1Num + die2Num === 9 || die1Num + die2Num === 10){
        //     newPointActive = (die1Num + die2Num);
        // }
        
        // if point is not active and roll is 7 or 11, pay pass line, clear the don't pass line
        // if point is not active and roll is a 2, 3, or 12, pay don't pass line, clear the pass line
        // if point is not active, activate point
    }
    
    // Pays the field, clears bet if not a win
    if (centerObj.fieldBottom.winnerIf.includes(die1Num+die2Num)){
        if (die1Num + die2Num === 12 || die1Num + die2Num === 2){
        payout = payout + (centerObj.fieldBottom.multiplier * 2 * centerObj.fieldBottom.currentBet);
        }
        payout = payout + (centerObj.fieldBottom.multiplier * centerObj.fieldBottom.currentBet);
    } else {
        centerObj.fieldBottom.currentBet = 0;
    }
    
        
    // if (die1Num + die2Num === pointActive){
    //     pointActive = 0;
    // }
    if (pointActive === 0 && (die1Num + die2Num === 4 || die1Num + die2Num === 5 || die1Num + die2Num === 6 || die1Num + die2Num === 8 || die1Num + die2Num === 9 || die1Num + die2Num === 10)){
        pointActive = (die1Num + die2Num);
    }
    
    chipTotal += payout;
    payout = 0;
    render(); 
}