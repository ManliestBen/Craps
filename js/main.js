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
    if (evt.target.className === 'chip'){
        betTotal += parseInt(evt.target.innerText);
        console.log(evt.target.innerText);
    }
    
    render();// console.log(evt.target);
}

function betChips(){

}

function render(){
    document.getElementById('chipDisplay').innerText = chipTotal;
    document.getElementById('betDisplay').innerText = betTotal;
}

