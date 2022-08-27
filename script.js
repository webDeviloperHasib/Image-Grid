let btn = document.getElementsByClassName('btn');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        let current = document.getElementsByClassName('active')[0];
        current.className = current.className.replace(' active', '');
        this.className += " active"
        // btn[i].className += " active"
    })
}

let column = document.getElementsByClassName('column');

function one(){
    for(let i = 0; i < column.length; i++){
        column[i].style.flex = "100%"
    }
}

function two(){
    for(let j = 0; j < column.length; j++){
        column[j].style.flex = "50%"
    }
}
function three(){
    for(let k = 0; k < column.length; k++){
        column[k].style.flex = "25%"
    }
}