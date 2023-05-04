function calcular(){
    var numero = window.document.getElementById('txtn')
    var tab = window.document.getElementById('tabuada')
    if (numero.value.length != 0){
        var n = Number(numero.value)
        tab.innerHTML = ''
        for(var c = 1; c <= 10 ; c++){
            var item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            item.value = `tab ${c}`
            tab.appendChild(item)
        }
    }else{
        window.alert('Digite um numero!')
    }

}