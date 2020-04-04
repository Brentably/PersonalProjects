const boxes = document.querySelectorAll(".col");
console.log(boxes)
boxes.forEach(box => {box.addEventListener("click", toggleSelected => box.classList.toggle("selected"))})