const tableRows = 8
const tableColumns = 16
for (let j = 0; j < tableRows; j++){
let row = document.getElementById("myTable").insertRow(j)
for (let i = 0; i < tableColumns; i++) {
row.insertCell(i)
}
}
const boxes = document.querySelectorAllq("td")
console.log(boxes)
boxes.forEach(box => {box.addEventListener("click", toggleSelected => box.classList.toggle("selected"))})