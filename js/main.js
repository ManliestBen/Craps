/*-------Constants-------*/



/*-------State Variables-------*/
let chipTotal, betTotal;


/*-------Cached Element References-------*/




/*-------Event Listeners-------*/
document.querySelector('main').addEventListener('click', handleClick);



/*-------Functions-------*/
init();

function init() {
    chipTotal = 500;
    betTotal = 0;
}

function handleClick(evt) {
    console.log(evt.target);
}

