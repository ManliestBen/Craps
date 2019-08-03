/*-------Constants-------*/



/*-------State Variables-------*/
let chipTotal, betTotal;


/*-------Cached Element References-------*/




/*-------Event Listeners-------*/
document.querySelector('body').addEventListener('click', handleClick);



/*-------Functions-------*/
init();

function init() {
    chipTotal = 500;
    betTotal = 0;
    render();
}

function handleClick(evt) {
    if (evt.target.className === 'chip' && chipTotal > 0){
        betTotal += parseInt(evt.target.innerText);
        chipTotal -= parseInt(evt.target.innerText);
        console.log(evt.target.innerText);
        render();
    } else {
        alert('Exceeded maxiumum chip count');
    }
   
    render();
}
function betChips(){

}

function render(){
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
    document.getElementById('chipDisplay').innerText = '$ ' + chipTotal;
    document.getElementById('betDisplay').innerText = '$ ' + betTotal;
}

