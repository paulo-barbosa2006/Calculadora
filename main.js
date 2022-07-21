let btn = document.querySelector('#btn')
btn.addEventListener('click', calcular)

function calcular(){
    let numtxt = document.querySelector('#number')
    let area = document.querySelector('#area')

    if(number.value.length == 0){
        alert('[ERRO] Complete o espaço em  branco digitando um número.')
    }else{
        let num = Number(numtxt.value)
        let contador = 1
        area.innerHTML = ''
        while (contador <= 10){
            let item = document.createElement('option')
            item.text = `${num} x
            ${contador} = ${num*contador}`
            item.value = `tab${contador}`
            area.appendChild(item)
            contador++
        }
    }
}
