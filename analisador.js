let peganum = document.querySelector('input#num')
let lista = document.querySelector('select#selana')
let valores =[]
let res = document.querySelector('div#res')
 

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n))!=-1) {
        return true
    } else{
        return false
    }
}


function clicar () {
    if(isNumero(peganum.value) && !inLista(peganum.value, valores)) {
        valores.push(Number(peganum.value))
        let item = document.createElement('option')
        item.text = `Valor ${peganum.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('valor invalido ou encontrado na lista')
        
       }
       peganum.value = ''
       peganum.focus()
    }    

 function finalizar() {
    if (valores.length==0) {
    alert('adicione valores antes de finalizar!')
} else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores) {
        soma += valores[pos] 
        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML+= `<p> Ao todo temos ${tot} valores cadastrados.</p>`
    res.innerHTML+= `<p> O maior valor encontrado foi ${maior}.</p>`
    res.innerHTML+= `<p> O menor valor encontrado foi ${menor}.</p>` 
    res.innerHTML+= `<p> A soma dos numeros é ${soma}`
    res.innerHTML+= `<p> a media entre os é ${media}`    
}
}

