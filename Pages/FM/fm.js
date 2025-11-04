function calculate() {
    const M = parseFloat(document.getElementById('m').value) || 0;
    const dollar = parseFloat(document.getElementById('dollar').value) || 0;
    const at = parseFloat(document.getElementById('at').value) || 0;
    const hash = parseFloat(document.getElementById('hash').value) || 0;
            
    const X = 77;
    const X2 = X * X;
    const d = at * hash;
            
    if (d === 0) {
        document.getElementById('result').innerHTML = "Ошибка: деление на ноль!";
        return;
    }
            
    const energy = (M * X2 * dollar) / d;
            
    document.getElementById('result').innerHTML = 

        `F = ${energy} ЕД<br>`;

}