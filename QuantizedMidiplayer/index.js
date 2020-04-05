const tR = 8
const tC = 16


//the following code block creates a table of a variable number of rows and columns based on the above constants and adds classes row# and column# classes to them, so each column or row can later be selected with a query selector
const table = []
for (let j = 0; j < tR; j++){
let row = document.getElementById("myTable").insertRow(j)
table.push(row)
for (let i = 0; i < tC; i++) {
table[j].insertCell(i)
table[j].childNodes[i].classList.add(`row${j}`);
table[j].childNodes[i].classList.add(`column${i}`)
}
}

//Creates a new array, tableArray, where you can access any box through tableArray[row][column] 
let tableArray = []
for(let row of table){
let arrayRow = [...row.childNodes ]
tableArray.push(arrayRow)
}
//could probably clean this up and add the previous two codeblocks together and make one codeblock that does both, but I'm not gonnna worry about that right now


console.log(tableArray)





//the following code sets the audio for a given row. It's not that efficient. Can improve.
/*const highcboxes = document.querySelectorAll(".row0")
highcboxes.forEach(highcbox => {highcbox.addEventListener('click', sound => {
    highc = document.querySelector("audio[data-note='highc']");
    highc.currentTime = "0"
    highc.play();
})})*/





//the following code toggles the selected class when clicked
function toggleSelected(e) {
    this.classList.toggle("selected")
    console.log(this)
    
 }


const boxes = document.querySelectorAll("td")
console.log(boxes)
boxes.forEach(box => {box.addEventListener('click', toggleSelected)})