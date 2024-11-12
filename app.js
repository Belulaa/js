let numeros = parseInt(prompt("Ingrese la cantidad de numeros que desee"))

for (let i = 1; i <= numeros; i++){
    if (i % 2 === 0){
        console.log(i + " Es par")
    } else{
        console.log(i + " Es impar")
    }
}