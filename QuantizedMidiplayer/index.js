const tableRows = 8
const tableColumns = 16
//the following code block creates a table of a variable number of rows and columns based on the above constants and adds classes row# and column# classes to them, so each column or row can later be selected with a query selector
const table = []
for (let j = 0; j < tableRows; j++){
let row = document.getElementById("myTable").insertRow(j)
table.push(row)
for (let i = 0; i < tableColumns; i++) {
table[j].insertCell(i)
table[j].childNodes[i].classList.add(`row${j}`);
table[j].childNodes[i].classList.add(`column${i}`)
}
}


//the following code sets of the audio for a given row. It's not that efficient. Can improve.
const highcboxes = document.querySelectorAll(".row0")
highcboxes.forEach(highcbox => {highcbox.addEventListener('click', sound => {
    highc = document.querySelector("audio[data-note='highc']");
    highc.currentTime = "0"
    highc.play();
})})





//the following code toggles the selected class when clicked
function toggleSelected(e) {
    this.classList.toggle("selected")
    console.log(this)
    
 }


const boxes = document.querySelectorAll("td")
boxes.forEach(box => {box.addEventListener('click', toggleSelected)})