//mapeamento dos elementos HTML
const numero = document.getElementById("numero")
const btnAdd = document.getElementById("btn-add")
const txtCount = document.getElementById("txt-count")
const inseridos = document.getElementById("inseridos")
const btnApaga = document.getElementById("btn-apagar")
const primeiro = document.getElementById("primeiro")
const ultimo = document.getElementById("ultimo")
const soma = document.getElementById("soma")
const maior = document.getElementById("maior")
const menor = document.getElementById("menor")
const btnFinalizar = document.getElementById("btn-finalizar")
const btnReciclar = document.getElementById("btn-reciclar")

//Lógica
var listaNumeros = Array()

btnFinalizar.style.cursor = "not-allowed"
btnFinalizar.setAttribute("disabled",null)
btnApaga.style.cursor = "not-allowed"
btnApaga.setAttribute("disabled",null)

btnAdd.addEventListener("click",()=>{ 
     if (numero.value == "") {
        alert("Insira um número")
     } else{
        listaNumeros.push(Number(numero.value))
        txtCount.innerHTML = "Restam " +
                            (10 - listaNumeros.length) +
                            " números"
        const newOption = document.createElement("option")
        newOption.value = numero.value 
        newOption.text = numero.value
        inseridos.appendChild(newOption)

        inseridos.size = listaNumeros.length

        if(listaNumeros.length > 0 ){
            btnApaga.style.cursor = "pointer"
            btnApaga.removeAttribute("disabled")
            //document.getElementById("opt1").style.cursor = "none"
        }
        
        if(listaNumeros.length == 10) {
            numero.style.cursor = "not-allowed"
            numero.setAttribute("disabled", null)
            btnAdd.style.cursor = "not-allowed"
            btnAdd.setAttribute("disabled", null)
            btnFinalizar.style.cursor = "pointer"
            btnFinalizar.removeAttribute("disabled")
        }


        console.log (listaNumeros)
     }
})

btnFinalizar.addEventListener("click", ()=>{
    primeiro.innerHTML = listaNumeros[0]
    ultimo.innerHTML = listaNumeros.at (-1)
    soma.innerHTML = listaNumeros.reduce((a, b) => a + b,0)
    maior.innerHTML = listaNumeros.reduce((a, b) => Math.max(a,b))
    menor.innerHTML = listaNumeros.reduce((a, b) => Math.min(a,b))

})

btnReciclar.addEventListener("click", ()=>{
    window.location.reload()

    

})
//()=>{} ou function(){}



