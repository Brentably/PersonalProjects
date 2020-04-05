const tableRows = 8
const tableColumns = 16
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





const boxes = document.querySelectorAll("td")
boxes.forEach(box => {box.addEventListener("click", toggleSelected => box.classList.toggle("selected"))})