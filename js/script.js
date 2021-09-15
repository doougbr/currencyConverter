function convertCurrencies() {
    
    var valueInReais = document.getElementById("inputValue")
    var value = valueInReais.value
    var parsedValue = parseFloat(value)
    var valueInDolar = parsedValue * 5.24
    var valueInEuro = parsedValue * 6.20
    console.log(valueInDolar)
    console.log(valueInEuro)

    var convertedValueDolar = "O valor convertido em U$ é " + valueInDolar
    var convertedValueEuro = "O valor convertido em € é " + valueInEuro

    var convertedElementDollar = document.getElementById("dollarConvertedField")
    var convertedElementEuro = document.getElementById("euroConvertedField")
    convertedElementDollar.innerHTML = convertedValueDolar
    convertedElementEuro.innerHTML = convertedValueEuro
}