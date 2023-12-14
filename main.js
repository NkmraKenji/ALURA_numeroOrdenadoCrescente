let num1 = parseFloat(prompt('Digite o primeiro número: '));
let num2 = parseFloat(prompt('Digite o primeiro número: '));
let num3 = parseFloat(prompt('Digite o primeiro número: '));
let num4 = parseFloat(prompt('Digite o primeiro número: '));
function ordemCrescente (num1, num2, num3, num4) {
    let num_ordenado = [num1, num2, num3].sort((x, y) => x-y);
    console.log(`Números ordenados: ${num_ordenado.join(', ')}`)
}

ordemCrescente(num1, num2, num3, num4);