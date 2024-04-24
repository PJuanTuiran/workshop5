let balance = 2500000
let Subway = 15000
let almojabanaGaseosa = 23000
const optionsOntheStand = () => {
 
    return prompt(`---bienvenido al stand--\n 
            elije una opcion \n
            1.comprar una almojabana con geseosa -- $15.000\n
            2.Subway con gaseosa -- $23.000\n
            3.No compra nada `)
   

}

const verifyOption = (option) => {
   let flag = true
    while (flag) {
       if (isNaN(parseInt(option))) {
           alert("Ingresa un numero de option entre 1-3")
           return optionsOntheStand()
        } else {
           flag = false
           return parseInt(option)
        }
    }
}

const chosenOption = (correctOption) => {
    if (correctOption === 1) {
        alert("le caerá mal porque lleva mucho en el stand")
    } else if (correctOption === 2) {
        alert("	estará llenito y bien")
    } else {
        alert("le tocara comprar algo en medellin")
    }
    
}
const availableBalance = (correctOption) => {
    if (correctOption === 1) {
       return balance = balance - Subway
    } else if (correctOption === 2) {
       return balance = balance - almojabanaGaseosa
    }
  
    
}

function main() {
    let option = optionsOntheStand()
    let correctOption = verifyOption(option)
    chosenOption(correctOption)
    let currentBalance = availableBalance(correctOption)
    alert(currentBalance)
}
main()