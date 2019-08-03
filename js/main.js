/*-------Constants-------*/



/*-------State Variables-------*/
let chipTotal, betTotal;


/*-------Cached Element References-------*/




/*-------Event Listeners-------*/
document.querySelector('section').addEventListener('click', chipClick);
document.querySelector('main').addEventListener('click', betClick);



/*-------Functions-------*/
init();

function init() {
    chipTotal = 500;
    betTotal = 0;
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
    console.log(evt.target);
}

function betChips(){

}

function render(){
    dimChips();
    document.getElementById('chipDisplay').innerText = '$ ' + chipTotal;
    document.getElementById('betDisplay').innerText = '$ ' + betTotal;

}

function dimChips(){
    if (chipTotal < 500) {
        document.getElementById('chip500').style.visibility= "hidden";
    }
    if (chipTotal < 100) {
        document.getElementById('chip100').style.visibility= "hidden";
    }
    if (chipTotal < 25) {
        document.getElementById('chip25').style.visibility= "hidden";
    }
    if (chipTotal < 5) {
        document.getElementById('chip5').style.visibility= "hidden";
    }
    if (chipTotal < 1) {
        document.getElementById('chip1').style.visibility= "hidden";
    }
}