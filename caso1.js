let balance = 2500000
let Subway = 15000
let almojabanaGaseosa = 23000
const binarypassword = "01110010_01101001_01110111_01101001";
let phrase =  "Taxi me puede llevar al hotel mariposas amarillas"
const playHildebrando = "piedra"; 
const messageWelcome = () => {
    alert("Bienvenido al  viaje a macondo !")
    alert("Hildebrando esta trabajando y termina su turno en la noche")
    alert(" hildebrando ese dia viernes le pagaron  2.500.000")
    alert("luego de que hildebrando termina su turno, decide ir a aeropuerto del dorado para viejar a macondo pero debe hacer una escala en medellin")
   
}
const optionsOntheStand = () => {

    return Number(prompt(`---bienvenido al aeropuerto del doraldo --\n` +
            `que deseas comprar antes del vuelo?\n`+
            `elije una opcion \n` +
            `1.comprar una almojabana con geseosa -- $15.000\n` +
            `2.Subway con gaseosa -- $23.000\n` +
            `3.No compra nada `))
}

const verifyOption = (option) => {
    let flag = true
    while (flag) {
       if (isNaN(option) || option > 3 ) {
           alert("Ingresa un numero de option entre 1-3")
           option =  optionsOntheStand()
       }
       else {
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
    } else if (correctOption === 3) {
        alert("le tocara comprar algo en medellin")
    }
    
}
const availableBalance = (correctOption) => {
    if (correctOption === 1) {
        balance = balance - Subway
    } else if (correctOption === 2) {
       balance = balance - almojabanaGaseosa
    } 
}
const suitcaseDimensions = () => {
    alert(`hildebrando luego llega a la sala de espera y revisa su maleta y no cumple con el tamaño establecido \n` +
        `55cm de alto \n` +
        `40cm de largo\n` +
        `20cm de ancho \n`
    )
    alert(`la maleta que tiene hildebardo es \n` +
        `60cm de alto \n` +
        `40cm de largo\n` +
        `20cm de ancho \n`
    )
}
const originalDimensions = () =>{
    const originalHeight  = 60; // en cm
    const lengthOriginal  = 40; // en cm
    const originalWidth = 20; // en cm
    return[originalHeight, lengthOriginal, originalWidth]
}
const allowedDimensions = () => {
    const highAllowed  = 55; // en cm
    const longAllowed  = 40; // en cm
    const widthAllowed = 20; // en cm
    return[highAllowed, longAllowed, widthAllowed]
    
}
const calculateTheReductionFactor = (originalHeight,lengthOriginal, originalWidth, highAllowed, longAllowed, widthAllowed ) => {
    const HighReductionFactor = highAllowed / originalHeight;
    const factorReductionLength = longAllowed / lengthOriginal;
    const factorReductionWidth = widthAllowed / originalWidth;
    return [HighReductionFactor, factorReductionLength, factorReductionWidth]
}

const SmallestReductionFactor = (HighReductionFactor,factorReductionLength, factorReductionWidth ) => {
   return Math.min(HighReductionFactor, factorReductionLength, factorReductionWidth);
    
}

const calculateTheDimensions = (originalHeight, lengthOriginal, originalWidth, factorSmallest) => {
    const newHigh = originalHeight * factorSmallest;
    const newLong = lengthOriginal * factorSmallest;
    const newWidth = originalWidth * factorSmallest;
    alert(`Nuevas dimensiones de la maleta dimensionadas proporcionalmente\n Alto: ${newHigh} cm\n largo: ${newLong} cm\n ancho: ${newWidth} cm`)
    alert("ahora si puede abordar el avion hacia medellin")
    
}

const messageaboutwifi = () => {
    alert(`hildebrando llego a la ciudad de medellin a las 2am y debe abordar a las 3am y tiene un problema con el wifi y lo necesita para poder hacer la reserva del hotel`)
    alert("lugo va caminando y encuentra una red que se llama ElPassEs pero la contraseña esta cifrada " + binarypassword + "y ademas cobran 50.000 la hora ")
}
// Función para convertir binario a decimal
const  binaryToDecimal = (binary) => {
    return parseInt(binary, 2);
}

// Función para convertir decimal a carácter ASCII
const decimalToCharacter = (decimal)  => {
    return String.fromCharCode(decimal);
}

// Contraseña en binario
const separateBinary = () => {
    return binarypassword.split('_');
}
// Separar la contraseña en partes

const ConvertEachPart = (parts) => {
    balance = balance - 50000
    let password = '';
    parts.forEach(binary => {
        const decimal = binaryToDecimal(binary);
        password += decimalToCharacter(decimal);
        
    });
    return password
    
    

}

const mensajesCaso4 = () => {
    alert("al llegar al macondo todos hablan con la vocal i entonces al momento del pedir el taxi le toca hablar asi")
}
const converterCadena = () => {
    let newVocalsCadena = phrase.replace(/[aeouáéóú]/gi, "i")
    alert(`llego a macondo y va a pedir el taxi \n ${newVocalsCadena}`)
    
}
 

const taxiDriver = () =>{
  
    const RandomNumber = Math.floor(Math.random() * 3);
    

    switch(RandomNumber) {
        case 0:
            return "piedra";
        case 1:
            return "papel";
        case 2:
            return "tijera";
    }
}

// Función para determinar el resultado de la ronda
function determineResult(playHildebrando, taxidriverplay) {
    if (playHildebrando === taxidriverplay) {
        
        return "Empate";
    } else if ((playHildebrando === "piedra" && taxidriverplay === "tijera") ||
               (playHildebrando === "papel" && taxidriverplay === "piedra") ||
        (playHildebrando === "tijera" && taxidriverplay === "papel")) {
        
        return "¡Hildebrando gana! El taxista no te cobrará.";
    } else {
        balance = balance - 300000
        return "¡El taxista gana! Debes pagarle los 300.000 pesos.";
    }
}



function realizarActividad(dia) {
    let mensaje = "";
    switch(dia) {
        case 1: 
            const piscina = prompt("¿Desea ir a la piscina hoy? (Sí/No)").toLowerCase();
            if (piscina === "sí" || piscina === "si") {
                mensaje = "Te metiste en la piscina y empezaste a sentirte ahogado por el exceso de cloro. Terminaron las vacaciones.";
            } else {
                mensaje = "Decidiste no ir a la piscina. No pasó nada.";
            }
            break;
        case 2: // Verde
            const caminata = prompt("¿Desea hacer una caminata hoy? (Sí/No)").toLowerCase();
            if (caminata === "sí" || caminata === "si") {
                mensaje = "Fuiste de caminata y llegaste a una hermosa cascada donde te tomaste fotos.";
            } else {
                mensaje = "Decidiste no hacer la caminata y te devolviste solo, pero te perdiste por la noche.";
            }
            break;
        case 3: // Roja
            const playa = prompt("¿Desea realizar actividades en la playa hoy? (Sí/No)").toLowerCase();
            if (playa === "sí" || playa === "si") {
                const actividad = prompt("¿Qué desea hacer en la playa? (voleibol/nadar/montar moto/tomar cocteles)").toLowerCase();
                switch(actividad) {
                    case "voleibol":
                        mensaje = "Jugaste voleibol y la pasaste genial.";
                        break;
                    case "nadar":
                        mensaje = "Nadaste en el mar y montaste moto acuática.";
                        break;
                    case "tomar cocteles":
                        mensaje = "Te pusiste a tomar cocteles y luego sentiste un fuerte dolor de cabeza. El chirrinchi estaba adulterado y debes regresar de emergencia.";
                        break;
                    default:
                        mensaje = "Actividad no válida.";
                }
            } else {
                mensaje = "Decidiste no ir a la playa.";
            }
            break;
        case 4: // Azul
            const hotel = prompt("¿Desea participar en las actividades del hotel hoy? (Sí/No)").toLowerCase();
            if (hotel === "sí" || hotel === "si") {
                const actividadHotel = prompt("¿Qué actividad desea hacer dentro del hotel? (bingo/bailar/casino)").toLowerCase();
                switch(actividadHotel) {
                    case "bingo":
                        mensaje = "Jugaste al bingo y ganaste dinero.";
                        break;
                    case "bailar":
                        mensaje = "Bailaste y la pasaste muy bien.";
                        break;
                    case "casino":
                        mensaje = "Fuiste al casino, hiciste una apuesta y perdiste. Solo te queda el pasaje de regreso.";
                        break;
                    default:
                        mensaje = "Actividad no válida.";
                }
            } else {
                mensaje = "Decidiste no participar en las actividades del hotel.";
            }
            break;
        default:
            mensaje = "Día no válido.";
    }
    return mensaje;
}






function main() {
    messageWelcome()
    let option = optionsOntheStand()
    let correctOption = verifyOption(option)
    chosenOption(correctOption)
    let currentBalance = availableBalance(correctOption)
    suitcaseDimensions()
    let dimensionsOrigin = originalDimensions()
    let dimensionesAllowed = allowedDimensions()
    let factors = calculateTheReductionFactor(dimensionsOrigin[0], dimensionsOrigin[1], dimensionsOrigin[2], dimensionesAllowed[0], dimensionesAllowed[1], dimensionesAllowed[2])
    messageaboutwifi()
    let factorSmallest = SmallestReductionFactor(factors[0], factors[1], factors[2])
    calculateTheDimensions(dimensionsOrigin[0], dimensionsOrigin[1], dimensionsOrigin[2], factorSmallest)
    let parts = separateBinary()
    let decipheredpassword = ConvertEachPart(parts)
    alert(`pudimos decibrar la contraseña ${decipheredpassword} y nos pudimos conectar -50.000`)
    mensajesCaso4()
    converterCadena()
    const taxidriverplay = taxiDriver();
    const result = determineResult(playHildebrando, taxidriverplay);
    alert(`Hildebrando juega: ${playHildebrando} \n` +
        `El taxista juega: ${taxidriverplay} \n` +
        `Resultado: ${result}`
    );
    for (let i = 1; i <= 4; i++) {
        console.log("Día", i + ":");
        const resultado = realizarActividad(i);
        console.log(resultado);
        if (resultado.includes("Terminan las vacaciones")) {
            break; 
    }
    }
    

    
    
    alert(`SI PUDO RESEGRESAR \n` +
        `estuvo 4 dias een el viaje \n` +
        `gasto ${balance}`)
}
main()





