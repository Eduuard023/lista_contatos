const form = document.getElementById('form-contato')
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    const inputContato = document.getElementById('nome-contato')
    const inputNumero = document.getElementById('numero-telefone')

    let linha = '<tr>'
    linha += `<td>${inputContato.value}</td>`
    linha += `<td>${inputNumero.value}</td>`
    linha += '<tr>'

    linhas += linha

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    inputContato.value = ''
    inputNumero.value = ''
})
