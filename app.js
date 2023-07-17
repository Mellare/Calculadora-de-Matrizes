
function somarMatrizes() {
    let s1 = document.getElementById('valor1');
    let s2 = document.getElementById('valor2');
    let s3 = document.getElementById('valor3');
    let s4 = document.getElementById('valor4');
    let s5 = document.getElementById('valor5');
    let s6 = document.getElementById('valor6');
    let s7 = document.getElementById('valor7');
    let s8 = document.getElementById('valor8');
    
    let operacao1 = parseInt(s1.value) + parseInt(s5.value);
    let operacao2 = parseInt(s3.value) + parseInt(s7.value);
    let operacao3 = parseInt(s2.value) + parseInt(s6.value);
    let operacao4 = parseInt(s4.value) + parseInt(s8.value);

    let exibicao1 = `${operacao1} ${operacao2}`;
    let exibicao2 = `${operacao3} ${operacao4}`;

    let exibirNaDiv = document.getElementById('div-exibicao-s');
    exibirNaDiv.innerHTML = `R:<br>[${exibicao1};<br>${exibicao2}]`;
    exibirNaDiv.appendChild();  
}


var produtoMatriz = () => {
    e1 = document.getElementById('m1');
    e2 = document.getElementById('m5');
    e3 = document.getElementById('m3');
    e4 = document.getElementById('m6');
    e5 = document.getElementById('m7');
    e6 = document.getElementById('m8');
    e7 = document.getElementById('m2');
    e8 = document.getElementById('m4');
    
    
    let m1 = e1.value * e2.value + e3.value * e4.value;
    let m2 = e1.value * e5.value + e3.value * e6.value;
    let m3 = e7.value * e2.value + e8.value * e4.value;
    let m4 = e7.value * e5.value + e8.value * e6.value;
    
    
    var exibirResMulti = document.getElementById('div-exibicao-m');
    exibirResMulti.innerHTML = `R:<br>[${m1} ${m2};<br>${m3} ${m4}]`;
    exibirResMulti.appendChild();
}


var determinanteMatriz = () => {
    let d1 = document.getElementById('d1').value;
    let d2 = document.getElementById('d2').value;
    let d3 = document.getElementById('d3').value;
    let d4 = document.getElementById('d4').value;

    let detM = d1 * d4 - d2 * d3;

    var exibirDet = document.getElementById('div-exibicao-d');
    exibirDet.innerHTML = `R:<br><i>det = ${detM}</i>`;
    exibirDet.appendChild();
}