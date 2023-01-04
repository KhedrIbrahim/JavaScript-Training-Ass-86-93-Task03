let myInp = document.querySelector(`[name= "dollar"]`);
let myDiv= document.querySelector(".result")

myInp.oninput = function() {
    myDiv.innerHTML = `{${myInp.value}} USD Dollar = {${(myInp.value * 15.6).toFixed(2)}} Egyption Pound`;
}