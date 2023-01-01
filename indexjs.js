const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");
console.log(h1);
console.log({h1, p, parrafito, pid, input,

});
console.log(input.value);
h1.innerText = "Gatito Blanco :D";
p[0].innerText = "Soy un Gatito blanco y me gusta jugar con bolas de lana.";
p[1].innerText = "Como me llaman ?";
parrafito.innerText = "Me llaman el destrozaPesebres3000 xd."



//console.log(h1.getAttribute("class"));
//h1.setAttribute("class", "rojo");
h1.classList.add("rojo");
h1.classList.remove("verde");
input.placeholder="Ingresa mi nombre UwU"
input.value="Copito";
const img = document.createElement("img");
pid.innerHTML = "";
pid.append(img);

img.style.width ="400px";
img.style.height="400px";
img.style.borderRadius = "16px";
img.style.marginLeft = "0px"
img.style.bottom = "0px";
img.style.marginTop = "16px";
img.setAttribute("src","https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");

