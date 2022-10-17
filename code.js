let btnstart = document.querySelector("#iniciar")
let btnstop = document.querySelector("#parar")
let contador = 1
let interval;
function atualizar(){
let div = document.querySelector(".timer")
let stop = document.querySelector("#stop").value
    if(contador <= stop){
        div.innerHTML = ` ${contador}`
    contador++
    } else{}
}
btnstart.addEventListener("click", () =>{
let vel = document.querySelector("#valor").value
valor = vel*1000
interval = setInterval(atualizar, valor);
});
btnstop.addEventListener("click", () =>{
clearInterval(interval);
});
