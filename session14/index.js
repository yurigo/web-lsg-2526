console.log("hola!" , document)
console.log(document)

console.log(document.getElementById("titulo"))
const asdf = document.getElementById("titulo")
asdf.classList.add("error")

asdf.textContent = "Adios!!";

document
    .querySelectorAll("h2")
    .forEach(e => e.style.backgroundColor = "blue")

const qwer = document.querySelector("section > h2");

qwer.textContent = "Butifarra"

const listOfTitles = document.querySelectorAll("section > h2");

console.log(listOfTitles);

listOfTitles.forEach(eleme => {
    // eleme.textContent = "Salchipapa"
    eleme.innerHTML = "<span>salchipapa</span><span>🔥🦄</span>"

})


const t = document.createElement("div");

t.id="newPS5";
t.classList.add("nuevo");
t.innerText = "ps5";

const primeraSeccion = document.querySelector("section")

console.log(primeraSeccion);


primeraSeccion.appendChild(t);





const especialito = document.getElementById("especialito")

especialito.classList.add("button");


especialito.addEventListener("click" , (event) => {
    console.log("💪💪💪💪💪💪💪💪💪💪💪💪💪");
});


const bolita = document.getElementById("bolita");



document.addEventListener("mousemove", (event) => {
    console.log(event)

    bolita.style.top = event.clientY  + "px";
    bolita.style.left = event.clientX + "px";

    

})