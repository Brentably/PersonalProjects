


function createPyramid() {
    let n = Math.abs(document.getElementById("num").value);
    pyramidDiv = document.getElementById("pyramidDiv");
    pyramidDiv.innerHTML = "";
    for (let a = 1; a <= n; a++) {
        for (let b = 0; b < (n-a); b++) {
            pyramidDiv.innerHTML += " ";
        }
        for (let c = 0; c < a; c++) {
            pyramidDiv.innerHTML += "#";
        }
        pyramidDiv.innerHTML += " ";
        for (let c = 0; c < a; c++) {
            pyramidDiv.innerHTML += "#";
        }
        pyramidDiv.innerHTML += "<br>";
    }
    return false;
}
