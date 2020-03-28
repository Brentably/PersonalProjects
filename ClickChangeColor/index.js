/*let x = 0
function colorChange() {
    function colorIs(j) {
        document.getElementById("colorDiv").style.backgroundColor = j;
    }
    switch (x) {
        case 0:
            colorIs('red');
            break;
        case 1:
            colorIs('orange');
            break;
        case 2:
            colorIs('yellow');
            break;
        case 3:
            colorIs('green');
            break;
        case 4:
            colorIs('blue');
            break;
        case 5:
            colorIs('indigo');
            break;
        default:
            colorIs('violet');
            x = -1;
    }
    x++
}*/

let x = 0
function colorChange() {
    function colorIs(j) {
        document.getElementById("colorDiv").style.backgroundColor = j;
    }
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    if (x<7){
    colorIs(colors[x]);
    x++
    }
    else {
        x = 0;
        colorIs(colors[x]);
    }
}
